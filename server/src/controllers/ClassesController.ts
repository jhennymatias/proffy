import { Request, Response } from 'express';
import db from '../database/connection';
import converterHourToMinutes from '../utils/convertHoursToMinutes';
import convertHourToMinutes from '../utils/convertHoursToMinutes';

interface ScheduleItem {
    week_day: number,
    from: 'string',
    to: 'string'
}

export default class ClassesController {
    async index(request: Request, response: Response) {
        const filters = request.query;
        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Missing filters search classes'
            })
        }

        const timeMinutes = convertHourToMinutes(filters.time as string);
        const classes = await db('classes')
            .whereExists(function () {
                this.select('classes_schedule.*')
                    .from('classes_schedule')
                    .whereRaw('`classes_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`classes_schedule`.`week_day` = ??', [Number(filters.week_day)])
                    .whereRaw('`classes_schedule`.`from` <= ??', [Number(timeMinutes)])
                    .whereRaw('`classes_schedule`.`to` > ??', [Number(timeMinutes)])
            })
            .where('classes.subject', '=', filters.subject as string)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*'])
            ;
        return response.json(classes)

    }
    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        const trx = await db.transaction();
        try {
            const insertedUsersId = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });

            const user_id = insertedUsersId[0];
            const insertedClassesId = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });

            const class_id = insertedClassesId[0];
            const class_schedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: converterHourToMinutes(scheduleItem.from),
                    to: converterHourToMinutes(scheduleItem.to)
                }
            });

            await trx('classes_schedule').insert(class_schedule);
            await trx.commit();

            return response.status(201).send();
        } catch (err) {
            console.error(err);
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpectated error while creating new class'
            });
        }
    }
}