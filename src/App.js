import React from "react";
import Home from "./paginas/home";
import Nav from "./components/nav";
import Projetos from "./paginas/projetos";
import Contato from "./paginas/contato";
import SobreMim from "./paginas/sobremim";

function App() {
  const mudarTheme = () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  }

  return (
    <>
    <button className="btn-theme" onClick={mudarTheme}>muda cor</button>
      <Nav />
      <Home />
      <Projetos />
      <Contato />
      <SobreMim />
    </>
  );
}

export default App;
