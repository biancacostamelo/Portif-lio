import React from "react";
import Home from "./paginas/home";
import Nav from "./components/nav";
import Projetos from "./paginas/projetos";
import Contato from "./paginas/contato";
import SobreMim from "./paginas/sobremim";
import Footer from "./components/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const mudarTheme = () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  };

  return (
    <>
      <button className="btn-theme p-4" onClick={mudarTheme}>
        <FontAwesomeIcon icon={faMoon} style={{ height: "30px" }} />
      </button>

      <Nav />
      <Home />
      <Projetos />
      <SobreMim />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
