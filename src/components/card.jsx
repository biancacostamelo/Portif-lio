import React from "react";
import "../styles/cardItem.css";
import projetosJson from "../data/projetos.json";

const CardItem = (props) => {
  const idProjeto = props.id;
  const projeto = projetosJson.filter((p) => p.id === idProjeto);

  return (
    <div 
    className="cardItem"
    >
      <div 
      className="cardCorpo" 
      style={{
      background: `linear-gradient(${projeto[0]["cor-gradiente"][0]}, ${projeto[0]["cor-gradiente"][1]})`,
    }}>
        <span onClick={props.onClose} className="spanVoltar">
          « voltar
        </span>
        <h2>{projeto[0].titulo}</h2>
        <div className="row">
          <div className="col-md-10 mb-5 px-5 py-4 d-flex flex-column gap-2" 
          style={{borderLeft: `7px ${projeto[0]["cores-principais"][0]} solid`}}
          >
            <h3 className="h3CardDescricao">{projeto[0].subtitulo}</h3>
            <p className="pCardDescricao">{projeto[0].descricao}</p>
            <p className="pCardDescricao">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est minima fugit porro. Saepe reprehenderit suscipit aliquid? Omnis, tempora. Itaque, veritatis.</p>
          </div>
          <div className="col-md-2 d-flex flex-wrap gap-2" style={{alignContent: 'baseline'}}>
            {projeto[0].tecnologias.map((i)=>
              <span className="tecnologiaItem" style={{backgroundColor: `${projeto[0]["cores-principais"][1]}`}}>{i}</span>
            )}
          </div>
          <div className="col-md-12">
            <div className="imagemProjeto">
              <img src={projeto[0].linkimg} alt="imagem do projeto" style={{width: "100%"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
