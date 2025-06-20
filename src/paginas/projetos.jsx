import React, { useEffect, useState } from "react";

//import "../styles/projetos.css";
import projectsd from "../data/projetos.json";
import { Link45deg } from 'react-bootstrap-icons'
import CardItem from "../components/card";

const Projetos = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsd);
  }, []);

  const [layout, setLayout] = useState("compacto");

  function TipoLayout(params) {
    setLayout(params);
  }

  const getContainerStyle = () => {
    switch (layout) {
      case "ampla":
        return { height: "280px", width: "50%", justifyContent: "center" };
      case "compacto":
        return {
          height: "160px",
          width: "320px",
          justifyContent: "space-around",
        };
      case "padrao":
      default:
        return { height: "200px", width: "400px", justifyContent: "center" };
    }
  };

  const [idCard, setIdCard] = useState(null);

  const AbrirDetalhes = (id) => {
    setIdCard(id);
  };

  const FecharDetalhes = () => {
    setIdCard(null)
  }

  return (
    <div className="container">
      <div id="projetos" style={{ position: "relative" }}>
        <h2>Projetos</h2>

        <div className="d-flex w-100 gap-3 justify-content-end align-items-center btn-view">
          <button id="ampla" title="Amplo" onClick={() => TipoLayout("ampla")}>
            <svg
              className="svgBtnView"
              width="34px"
              height="34px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z"
                stroke="var(--brancoEsp)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            id="padrao"
            title="Padrão"
            onClick={() => TipoLayout("padrao")}
          >
            <svg
              className="svgBtnView"
              width="30px"
              height="30px"
              fill="var(--brancoEsp)"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Grid" strokeWidth="0" fill="none" fillRule="none">
                <rect id="Container" x="0" y="0" width="24" height="24"></rect>
                <rect
                  id="shape-1"
                  stroke="var(--brancoEsp)"
                  fill="var(--brancoEsp)"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  x="4"
                  y="4"
                  width="6"
                  height="6"
                  rx="1.5"
                ></rect>
                <rect
                  id="shape-2"
                  stroke="var(--brancoEsp)"
                  fill="var(--brancoEsp)"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  x="4"
                  y="14"
                  width="6"
                  height="6"
                  rx="1.5"
                ></rect>
                <rect
                  id="shape-3"
                  stroke="var(--brancoEsp)"
                  fill="var(--brancoEsp)"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  x="14"
                  y="4"
                  width="6"
                  height="6"
                  rx="1.5"
                ></rect>
                <rect
                  id="shape-4"
                  stroke="var(--brancoEsp)"
                  fill="var(--brancoEsp)"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  x="14"
                  y="14"
                  width="6"
                  height="6"
                  rx="1.5"
                ></rect>
              </g>
            </svg>
          </button>

          <button
            id="compacto"
            title="Compacto"
            onClick={() => TipoLayout("compacto")}
          >
            <svg
              className="svgBtnView"
              width="36px"
              height="36px"
              viewBox="0 0 24 24"
              fill="var(--brancoEsp)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25 4V20M14.75 4V20M4 14.75H20M4 9.25H20M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
                stroke="var(--bg)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {idCard && <CardItem id={idCard} onClose={FecharDetalhes}/>}
        <div
          className="row gap-5"
          id="display"
          style={{ justifyContent: getContainerStyle().justifyContent }}
        >
         
          {projects.map((e) => (
            <div
              className="col-md-4 cardProjeto"
              key={e.id}
              style={{ width: getContainerStyle().width }}
            >
              <div
                className="imgContainer"
                style={{ height: getContainerStyle().height }}
              >
                <img className="imgContent" src={e.linkimg} alt={e.subtitulo} />
              </div>
              <div className="cardProjetoContain">
                <div
                  className="cardProjetoTextContainer"
                  style={{
                    borderLeftWidth: "5px",
                    borderLeftStyle: "solid",
                    borderLeftColor: e["cores-principais"][0],
                    paddingLeft: "15px",
                  }}
                >
                  <h3 className="projetoH3Text">{e.titulo}</h3>
                  <p className="projetoPText">{e.descricao}</p>
                </div>
                <div className="cardProjetoTecnologiasContain">
                  {e.tecnologias.map((i) => (
                    <div className="tecnologiaItem">{i}</div>
                  ))}
                  <a
                    href={e["link-site"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="abrir site"
                  >
                     <Link45deg className="iconSetaCard"/>
                  </a>
                  <button
                    onClick={() => AbrirDetalhes(e.id)}
                    className="btn iconSetaCard"
                    style={{ right: "40px", bottom: "-15px", fontSize: "35px" }}
                    title="ver mais"
                  >
                    ↗
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projetos;
