import React from 'react';
import './styles.css';
import Whatsapp from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <>
            <article className="teacher-item">
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/23640249?s=460&u=78a611d3b5c8c8bfd3d5810b2210cd9b8230a7df&v=4" alt="perfil" />
                    <div>
                        <strong>
                            Nome do professor
                            </strong>
                        <span>
                            Materia
                            </span>
                    </div>
                </header>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <br />  <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>

                <footer>
                    <p>
                        Preço por hora
                            <strong>R$ 20,00</strong>
                    </p>
                    <button type="button">
                        <img src={Whatsapp} alt="icon-whatsapp" />
                            Entrar em contato
                        </button>
                </footer>
            </article>
        </>);
}

export default TeacherItem