import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css'
import Input from '../../components/Input';
function TeacherForm() {
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
                </fieldset>
            </main>
        </div>
    )
}

export default TeacherForm;