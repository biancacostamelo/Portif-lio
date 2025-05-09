import React from "react";
import '../styles/footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { faGithub } from "@fortawesome/free-brands-svg-icons"; 

import fotosSobremim from "../assets/images/sobremim/foto-sobremim.png"

function Footer() {
  return (
    <div id="rodape" class="my-5">
      <footer class="w-100">
        <div class="container gap-4 d-flex flex-column">
          <div class="row">
            <div class="col-md-4 d-flex align-items-center gap-4">
              <div className="iconUser">
              <img style={{objectFit: "cover", height: "100%", width: "100%"}} src={fotosSobremim} alt="" />
              </div>
              <div>
                <p>Bianca Costa</p>
                <p>Desenvolvedora FullStack</p>
              </div>
            </div>
            <div class="col-sm-8 linksfooter">
              <a href="#home">Home</a>
              <a href="#projetos">Projetos</a>
              <a href="#tecnologias">Sobre Mim</a>
              <a href="#contato">Contato</a>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-6">
              <p>© 2025. All rights reserved.</p>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center gap-3">
              <a href='https://www.linkedin.com/in/bianca-costa-707000223/'><FontAwesomeIcon icon={faLinkedin} className="icon-linkedin" /></a>
              <a href='https://github.com/biancacostamelo/'><FontAwesomeIcon icon={faGithub}  className="icon-linkedin" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
