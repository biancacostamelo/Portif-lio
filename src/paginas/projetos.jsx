import React from 'react'
import '../styles/projetos.css'
import SiteMastercard from '../assets/images/site cartao.png'

function Projetos() {
  return (
    <div id='projetos'>
      <h2>Projetos</h2>
      <div className="row gap-5 justify-content-center">
        <div className="col-md-4 m-3 cardProjeto">
          <div className="imgContainer">
            <img className='imgContent' src={SiteMastercard} alt="" />
          </div>
          <div className="cardProjetoContain">
            <div className="cardProjetoTextContainer">
              <h3 className='projetoH3Text'>MasterCard Landing Page</h3>
              <p className='projetoPText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet ullam saepe, odit fugiat aspernatur.</p>
            </div>
            <div className="cardProjetoTecnologiasContain">
              <div className="tecnologiaItem">JavaScript</div>
              <div className="tecnologiaItem">NODE.Js</div>
              <div className="tecnologiaItem">MySQL</div>
              <div className="tecnologiaItem">Express</div>
              <a href="" className='iconSetaCard'>↗</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 m-3 cardProjeto">
          <div className="imgContainer">
            <img className='imgContent' src={SiteMastercard} alt="" />
          </div>
          <div className="cardProjetoContain">
            <div className="cardProjetoTextContainer">
              <h3 className='projetoH3Text'>MasterCard Landing Page</h3>
              <p className='projetoPText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet ullam saepe, odit fugiat aspernatur.</p>
            </div>
            <div className="cardProjetoTecnologiasContain">
              <div className="tecnologiaItem">JavaScript</div>
              <div className="tecnologiaItem">NODE.Js</div>
              <div className="tecnologiaItem">MySQL</div>
              <div className="tecnologiaItem">Express</div>
              <a href="" className='iconSetaCard'>↗</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 m-3 cardProjeto">
          <div className="imgContainer">
            <img className='imgContent' src={SiteMastercard} alt="" />
          </div>
          <div className="cardProjetoContain">
            <div className="cardProjetoTextContainer">
              <h3 className='projetoH3Text'>MasterCard Landing Page</h3>
              <p className='projetoPText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet ullam saepe, odit fugiat aspernatur.</p>
            </div>
            <div className="cardProjetoTecnologiasContain">
              <div className="tecnologiaItem">JavaScript</div>
              <div className="tecnologiaItem">NODE.Js</div>
              <div className="tecnologiaItem">MySQL</div>
              <div className="tecnologiaItem">Express</div>
              <a href="" className='iconSetaCard'>↗</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projetos