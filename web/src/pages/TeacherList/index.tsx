import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponiveis">
                <form id="search-teachers">
                    <Input id="subject" label="Matéria" />
                    <Input id="week_day" label="Dia da Semana" />
                    <Input id="time" type="time" label="Hora" />
                </form>  
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;