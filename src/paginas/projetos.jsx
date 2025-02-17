import React from "react";
import "../styles/projetos.css";
import SiteMastercard from "../assets/images/projetos/imagens/siteCartao.png";
import projects from "../data/projetos.json";

function Projetos() {
  return (
    <div className="container">
      <div id="projetos">
        <h2>Projetos</h2>
        <div className="row gap-5 justify-content-center">
          {projects.map((e) =>
            e.tecnologias.length >= 6 ? (
              <div
                className="col-md-4 cardProjeto"
                key={e.id}
                style={{ height: "413px" }}
              >
                <div className="imgContainer">
                  <img
                    className="imgContent"
                    src={e["link-img"]}
                    alt={e.subtitulo}
                  />
                </div>
                <div className="cardProjetoContain">
                  <div className="cardProjetoTextContainer">
                    <h3 className="projetoH3Text">{e.titulo}</h3>
                    <p className="projetoPText">{e.descricao}</p>
                  </div>
                  <div className="cardProjetoTecnologiasContain">
                    {e.tecnologias.map((i) => (
                      <div className="tecnologiaItem">{i}</div>
                    ))}
                    <a
                      href={e["link-repositorio"]}
                      target="_blank"
                      className="iconSetaCard"
                      rel="noopener noreferrer"
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-md-4 cardProjeto" key={e.id}>
                <div className="imgContainer">
                  <img
                    className="imgContent"
                    src={e["link-img"]}
                    alt={e.subtitulo}
                  />
                </div>
                <div className="cardProjetoContain">
                  <div className="cardProjetoTextContainer">
                    <h3 className="projetoH3Text">{e.titulo}</h3>
                    <p className="projetoPText">{e.descricao}</p>
                  </div>
                  <div className="cardProjetoTecnologiasContain">
                    {e.tecnologias.map((i) => (
                      <div className="tecnologiaItem">{i}</div>
                    ))}
                    <a
                      href={e["link-repositorio"]}
                      target="_blank"
                      className="iconSetaCard"
                      rel="noopener noreferrer"
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
          <div className="col-md-4 cardProjeto">
            <div className="imgContainer">
              <img className="imgContent" src={SiteMastercard} alt="" />
            </div>
            <div className="cardProjetoContain">
              <div className="cardProjetoTextContainer">
                <h3 className="projetoH3Text">MasterCard Landing Page</h3>
                <p className="projetoPText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur amet ullam saepe, odit fugiat aspernatur.
                </p>
              </div>
              <div className="cardProjetoTecnologiasContain">
                <div className="tecnologiaItem">JavaScript</div>
                <div className="tecnologiaItem">NODE.Js</div>
                <div className="tecnologiaItem">MySQL</div>
                <div className="tecnologiaItem">Express</div>
                <a href="#projetos" className="iconSetaCard">
                  ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
