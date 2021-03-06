import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>
            <Route path="/classes" component={TeacherForm} exact/>
            <Route path="/study" component={TeacherList} exact/>
        </BrowserRouter>
    )
}

export default Routes;
