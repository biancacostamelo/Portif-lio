import React from "react";
import '../styles/sobremim.css'
import foto from '../assets/images/sobremim/foto.jpg'

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
            <h4>Olá!, eu sou a Bianca!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              adipisci doloribus architecto similique a quasi commodi neque,
              reprehenderit nemo esse? Modi totam dolorum placeat nihil
              assumenda iusto hic. Voluptates, rerum. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Qui nobis in incidunt atque laborum
              officia at sequi consequatur velit quaerat necessitatibus quis,
              excepturi dolor quo aliquam quisquam architecto delectus veniam.
            </p>
            <button class="btn btn-contato w-50">Mensagem</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobremim;
