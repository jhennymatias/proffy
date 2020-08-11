import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import './styles.css'
import Input from '../../components/Input';
import WarningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: Number, field: string, value: string) {
        const newArray = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });
        setScheduleItems(newArray);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=> {
            alert('Cadastro realizado');
            history.push('/')
        }).catch(()=>{
            alert('Erro no cadastro'); 
        })

    }



    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel você querer dar aula"
                description="O primeiro passo é preencher esse formulário d inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados:</legend>
                        <Input
                            id="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <Input
                            id="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />

                        <Input
                            id="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />

                        <Textarea
                            id="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre aula:</legend>
                        <Select
                            id="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Bio', label: 'Biologia' },
                                { value: 'Matematica', label: 'Matematica' },
                                { value: 'Quimica', label: 'Quimica' }
                            ]}
                        />

                        <Input
                            id="cost"
                            label="Custo da aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis:
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horário
                        </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        id="week_day"
                                        label="Dia da Semana"
                                        value ={scheduleItem.week_day}
                                        onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                    <Input
                                        id="from"
                                        value ={scheduleItem.from}
                                        label="das"
                                        type="time"
                                        onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        id="to"
                                        value ={scheduleItem.to}
                                        label="até"
                                        type="time"
                                        onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
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
                        <button type="submit">Salvar</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;