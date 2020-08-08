import React from  'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/17259787?s=460&u=3f5caaa544fa6ff09578e2c181342bd10bd1583f&v=4" alt="Thelry Bissi"/>
                    <div>
                        <strong>Thelry D. Bissi</strong>
                        <span>Análise de Algoritmos</span>
                    </div>
                </header>

                <p>Melhoramentos de algoritmos, diminuindo sua complexidade e otimizando conjunto de operações</p>

                <footer>
                    <p>Preço/Hora
                    <strong>R$180,00</strong>
                    </p>
                    
                    <button type="button">
                        <img src={ whatsappIcon } alt="WhatsApp"/>
                        Contato WhatsApp
                    </button>
                </footer>
            </article>
    )
}

export default TeacherItem;