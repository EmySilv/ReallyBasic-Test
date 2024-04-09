import React from "react";
import "./Historia.style.css";
import Ilustration from "../../../assets/homeview.jpg";

const Historia = () => {
  return (
    <div className="container_historia">
      <div className="wrapper">
        <div className="historia_title">
          <p>Bem-vindo à Really Basic</p>
        </div>
        <div className="historia_content">
            <p>
              Nossa missão é tornar a decoração da sua casa uma experiência
              simples e acessível, sem comprometer a excelência. Na Really
              Basic, acreditamos que a beleza está nos detalhes sutis e na
              funcionalidade inteligente. Desde sofás elegantes a mesas
              versáteis, cada item em nosso showroom é escolhido para oferecer
              conforto, durabilidade e estilo atemporal.
            </p>
          </div>
      </div>
      <div className="ilustration">
        <img src={Ilustration} alt="Home View" />
      </div>
    </div>
  );
};

export default Historia;
