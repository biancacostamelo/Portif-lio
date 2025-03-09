import React from "react";
import tech from "../data/myTech.json";

const Tecnologias = () => {
  return (
    <div id="tecnologias">
      <div class="container">
        <h2>Tecnologias</h2>
        <div class="row">
          {tech.map((e) => (
            <div key={e.id} class="col-md-4 d-flex align-items-center gap-3 pt-4 pb-4">
              <img src={e.caminho} alt={"svg" + e.nome} />
              <div class="textoTech">
                <p>{e.nome}</p>
                <span>{e.descricao}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Tecnologias
