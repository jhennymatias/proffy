import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponiveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject"> Matéria
                            <input type="text" id="subject" />
                        </label>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day"> Dia da Semana
                            <input type="text" id="weekday" />
                        </label>
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="time"> Hora
                            <input type="text" id="time" />
                        </label>
                    </div>
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