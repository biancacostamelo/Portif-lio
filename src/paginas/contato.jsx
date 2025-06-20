import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import '../styles/contato.css'
import Loader from "../components/spinnerLoading"

const Contato = () => {
  const form = useRef()
  const [msgButton, setMsgButton] = useState('Enviar Mensagem')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [descricao, setDescricao] = useState('')
  const [assunto, setAssunto] = useState('Selecione')

  const enviarEmail = (e) => {
    e.preventDefault()

    setMsgButton(Loader)
    emailjs.sendForm('service_llipug3', 'template_pt72xgm', form.current, '3MFD0VpmqjVlYYQRc')
      .then((result) => {
        setMsgButton('Enviar Mensagem')
        alert("Mensagem enviada com sucesso!")
        setNome('')
        setEmail('')
        setAssunto('Selecione')
        setDescricao('')
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
                <input className="inputContato" type="text" name="nome" placeholder="Nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
              </div>
              <div className="col-lg-6 d-flex flex-column">
                <label htmlFor="email">E-mail</label>
                <input className="inputContato" type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-12 d-flex flex-column">
                <label htmlFor="assunto">Assunto</label>
                <select className="inputContato" name="assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} required>
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
                <textarea className="inputContato" name="mensagem" rows="5" value={descricao} onChange={(e) => setDescricao(e.target.value)} required></textarea>
              </div>
            </div>
            <button type="submit" className="btn-contato" >
              {msgButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contato
