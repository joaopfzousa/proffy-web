import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/43577466?s=460&u=04bcd9838cdd149e6d8c101e650fafd2348fcc9d&v=4" alt="João Sousa"/>
                <div>
                    <strong>João Sousa</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>80,00€</strong>  
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contacto
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;