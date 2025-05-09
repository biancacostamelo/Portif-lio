import React, { useRef } from "react"
import emailjs from '@emailjs/browser'
import '../styles/contato.css'

const Contato = () => {
  const form = useRef()

  const enviarEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_llipug3', 'template_pt72xgm', form.current, '3MFD0VpmqjVlYYQRc')
      .then((result) => {
        alert("Mensagem enviada com sucesso!")
      }, (error) => {
        alert("Erro ao enviar mensagem.")
        console.error(error.text)
      })
  }

  return (
    <div id="contato" className="my-5 py-5">
      <div className="container d-flex justify-content-center">
        <div className="areaContato">
          <div className="row">
            <div className="col-xl-6">
              <h1 style={{ color: 'var(--brancoEsp)' }}>Contate-me</h1>
            </div>
            <div className="col-xl-6">
              <p>📧 Bianca.costamelo1@gmail.com</p>
              <p>📞 🇧🇷 (+55) 11 95179-4913</p>
            </div>
          </div>
          <form ref={form} onSubmit={enviarEmail}>
            <div className="row mb-3">
              <div className="col-lg-6 d-flex flex-column">
                <label htmlFor="nome">Nome</label>
                <input className="inputContato" type="text" name="nome" placeholder="Nome" required />
              </div>
              <div className="col-lg-6 d-flex flex-column">
                <label htmlFor="email">E-mail</label>
                <input className="inputContato" type="email" name="email" placeholder="E-mail" required />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-12 d-flex flex-column">
                <label htmlFor="assunto">Assunto</label>
                <select className="inputContato" name="assunto" required>
                  <option value="">Selecione</option>
                  <option value="Desenvolvimento">Desenvolvimento Web</option>
                  <option value="Orçamento">Orçamento</option>
                  <option value="Sugestão">Sugestão</option>
                  <option value="Duvida">Dúvida</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="row mb-1">
              <div className="col-12 d-flex flex-column">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea className="inputContato" name="mensagem" rows="5" required></textarea>
              </div>
            </div>
            <button type="submit" className="btn-contato">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contato
