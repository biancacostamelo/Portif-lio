import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="a"></div>
      <div className="home-text-contain px-5">
        <h2>Portifólio</h2>
        <h1>Desenvolvedora FullStack Bianca Costa</h1>
      </div>
      <div className="view-icon-seta">
        <span className="icon-seta">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 512"
            style={{ height: "24px", width: "24px" }}
            fill="#fff"
          >
            <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Home;
