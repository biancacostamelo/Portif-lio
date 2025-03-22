import React from 'react'
import '../styles/formacao.css'

function Formacao() {
    return (
        <div id="formacao" class="my-5 py-5">
            <div class="container">
                <h2>Formação</h2>
                <div class="row">
                    <div class="col-sm-12 d-flex justify-content-center flex-column" >
                        <span>Análise e Desenvolvimento de Sistemas</span>
                        <p>Universidade de Guarulhos</p>
                        <ul>
                            <li>Análise e desenvolvimento de sistemas, desde a identificação de requisitos até a implementação de soluções tecnológicas.</li>
                            <li>Aplicação de metodologias ágeis e uso de ferramentas modernas no desenvolvimento de software.</li>
                            <li>Programação com JavaScript, Java, React, Node.js e SQL, entre outras tecnologias.</li>
                            <li>Modelagem e gerenciamento de bancos de dados relacionais e não relacionais.</li>
                            <li>Compreensão dos fundamentos da computação e sua aplicação no contexto corporativo.</li>
                            <li>Desenvolvimento da adaptabilidade profissional e consciência social no ambiente de TI.</li>
                        </ul>
                    </div>
                    <hr />
                    <div class="col-sm-12 d-flex justify-content-center flex-column mt-3">
                        <span>Técnico em Informática para Internet</span>
                        <p>SENAC</p>
                        <ul>
                            <li>Desenvolvimento e implementação de aplicações web e mobile.</li>
                            <li>Codificação de front-end utilizando HTML, CSS, JavaScript e frameworks modernos.</li>
                            <li>Codificação de back-end com Node.js, Express e integração com bancos de dados relacionais (MySQL)</li>
                            <li>Publicação e manutenção de aplicações web e mobile.</li>
                            <li>Desenvolvimento de algoritmos e lógica de programação.</li>
                            <li>Implementação e gerenciamento de bancos de dados para aplicações web.</li>
                            <li>Criação de serviços web e APIs REST.</li>
                            <li>Desenvolvimento de interfaces gráficas para dispositivos móveis com React Native.</li>
                            <li>Integração com web services e recursos de sistemas móveis.</li>
                            <li>Organização e otimização do processo de desenvolvimento de software.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formacao