import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css'
import Input from '../../components/Input';
import WarningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);

    }
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel você querer dar aula"
                description="O primeiro passo é preencher esse formulário d inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados:</legend>
                    <Input id="name" label="Nome completo" />
                    <Input id="avatar" label="Avatar" />
                    <Input id="whatsapp" label="Whatsapp" />
                    <Textarea id="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre aula:</legend>
                    <Select
                        id="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Bio', label: 'Biologia' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Quimica', label: 'Quimica' }
                        ]}
                    />
                    <Input id="cost" label="Custo da aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários Disponíveis:
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo Horário
                        </button>
                    </legend>
                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    id="week_day"
                                    label="Dia da Semana"
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-Feira' },
                                        { value: '2', label: 'Terça-Feira' },
                                        { value: '3', label: 'Quarta-Feira' },
                                        { value: '4', label: 'Quinta-Feira' },
                                        { value: '5', label: 'Sexta-Feira' },
                                        { value: '6', label: 'Sábado' }
                                    ]}
                                />
                                <Input id="from" label="das" type="time" />
                                <Input id="to" label="até" type="time" />
                            </div>
                        )
                    })
                    }
                </fieldset>


                <footer>
                    <p>
                        <img src={WarningIcon} alt="importante" />
                        Importante!
                        <br />
                        Preencha todos os dados</p>
                    <button type="button">Salvar</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;