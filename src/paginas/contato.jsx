import React from "react";
import '../styles/contato.css'

const Contato = () => {
  return (
    <div id="contato">
      <div className="container d-flex justify-content-center">
      <div className="areaContato">
        <div className="row">
          <div className="col-xl-6">
            <h1 style={{ color: 'var(--brancoEsp)' }}>Contate-me</h1>
          </div>
          <div className="col-xl-6">
            <p> &#x1f4e7; Bianca.costamelo1@gmail.com</p>
            <p>&#9742; 🇧🇷 (+55) 11 95179-4913</p>
          </div>
        </div>
        <form action="" className="" onsubmit="enviar()">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column">
              <label for="PrimeiroNome">Nome</label>
              <input className="inputContato" type="text" id="PrimeiroNome" placeholder="Nome" />
            </div>
            <div className="col-lg-6 d-flex flex-column">
              <label for="Email">E-mail</label>
              <input className="inputContato" type="text" id="PrimeiroNome" placeholder="E-mail" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex flex-column">
              <label for="Assunto">Assunto</label>
              <select className="inputContato" name="" id="Assunto">
                <option className="inputContato" value="">Desenvolvimento Web</option>
                <option className="inputContato" value="">Orçamento</option>
                <option className="inputContato" value="">Sugestão</option>
                <option className="inputContato" value="">Duvida</option>
                <option className="inputContato" value="">Outro</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex flex-column">
              <label for="msg">Mensagem</label>
              <textarea className="inputContato" name="" id=""></textarea>
            </div>
          </div>
          <button onsubmit="enviar()" className=" btn-contato">Enviar mensagem</button>
        </form>
      </div>
      </div>
    </div>
  )
}
export default Contato