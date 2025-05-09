import React from "react";
import '../styles/sobremim.css'
import foto from '../assets/images/sobremim/foto-sobremim.png'

function Sobremim() {
  return (
    <div id="sobremim">
      <div class="container d-flex flex-column gap-4">
        <h2 class="text-center">Sobre Mim</h2>
        <div class="row">
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <img
                class="quadrado"
                src={foto}
                alt="foto"
              />
            </div>
          </div>
          <div class="col-md-6 p-5 d-flex flex-column justify-content-center">
            <h4>Olá!, eu sou a Bianca!,</h4>
           
           <p> Estudante de Análise e Desenvolvimento de Sistemas e Técnico em Informática para Internet.</p>
           <p>Tenho experiência em desenvolver sites, aplicativos e sistemas complexos. Além disso, possuo conhecimento em Figma para design de interfaces. Estou aberta a novos desafios! <br />Entre em contato! </p>
            
            <a href="#contato"><button class="btn-contato w-50">Mensagem</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobremim;
