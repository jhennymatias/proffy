import React, { useState, useEffect} from 'react';
import logo from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import {Link} from 'react-router-dom';
import './styles.css'
import api from '../../services/api';

function Landing(){
    const [toConnections, setTotalConnections] = useState(0);
    useEffect(()=>{
        api.get('connections').then(response => {
            const {totalConnections} = response.data;
            setTotalConnections(totalConnections);

    console.log("teste" + toConnections)
        })
    },[]);
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src ={logo} alt="logo"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img 
                    src={LandingImg} 
                    alt="plataforma de estudos" 
                    className="hero-image"
                />

                <div className="button-container">
                    <Link to="/study" className= "study" >
                        <img src={studyIcon} alt="study icon" />
                        Estudar
                    </Link>

                    <Link to="/classes" className= "give-classes" >
                        <img src={giveClassesIcon} alt="give-classes" />
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                            Total de {toConnections} conexões já realizada
                            <img
                                src={purpleHeartIcon} 
                                alt="purple heart"
                            />
                </span>
            </div>
        </div>
    )
}

export default Landing;