import "./Slide.style.css";
import sofaVerde from "../../../assets/sofaVerde.jpg";

const Slide = () => {
  return (
    <div className="container_slide">
      <div className="chevron">
        <button>
          <i className="ri-arrow-left-s-line"></i>
        </button>
      </div>
      <div className="description_Wrapper">
        <div className="description">
          <h3>Verde Sereno: Sofá de Dois Lugares para Relaxar</h3>

          <p>
            Transforme sua sala em um oásis de tranquilidade com nosso sofá de
            dois lugares verde, perfeito para quem busca combinar estilo e
            conforto. Com um design contemporâneo e sofisticado, este sofá se
            destaca pela sua cor vibrante e pela qualidade impecável de seus
            materiais.
          </p>
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
        <img src={sofaVerde} alt="sofá verde" />
      </div>

      <div className="chevron">
        <button>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Slide;
