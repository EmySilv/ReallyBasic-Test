import "./Slide.style.css";
import sofaVerde from "../../../assets/sofaVerde.jpg";
import sofaAzul from "../../../assets/sofaAzul.jpg";
import { useState } from "react";

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imagem: sofaVerde,
      title: "Verde Sereno: Sofá de Dois Lugares para Relaxar",
      description:
        "Transforme sua sala em um oásis de tranquilidade com nosso sofá de dois lugares verde, perfeito para quem busca combinar estilo e conforto. Com um design contemporâneo e sofisticado, este sofá se destaca pela sua cor vibrante e pela qualidade impecável de seus materiais.",
    },
    {
      imagem: sofaAzul,
      title: "Azul Marinho: Sofá de Três Lugares para Relaxar",
      description:
        "Descubra o conforto com nosso sofá azul, ideal para quem busca relaxar em casa. Este sofá de três lugares oferece um design elegante e funcional, perfeito para quem valoriza a qualidade e o conforto",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < 1 ? prevSlide + 1 : 1)); // Aqui assumimos que temos apenas 2 slides
  };

  const currentSlideData = slides[currentSlide];
  return (
    <div className="container_slide">
      <div className="chevron" onClick={handlePrevSlide}>
        <button>
          <i className="ri-arrow-left-s-line"></i>
        </button>
      </div>
      <div className="description_Wrapper">
        <div className="description">
          <h3>{currentSlideData.title}</h3>
          <p>{currentSlideData.description}</p>
        </div>
        <div className="options">
          <div className="more">
            <button>Saiba mais</button>
          </div>
          <div className="see">
            <button> ou Ver móveis</button>
          </div>
        </div>
      </div>

      <div className="image_description">
        <img src={currentSlideData.imagem} alt="sofá verde" />
      </div>

      <div className="chevron" onClick={handleNextSlide}>
        <button>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Slide;
