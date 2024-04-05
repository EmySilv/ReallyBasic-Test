import "./Box.style.css";
import AssentoBancada from "../../../assets/assentoBancada.jpg";

const Box = () => {
  return (
    <div className="container_box">
      <div className="title">
        <p>BOXES DE DESTAQUE</p>
        <div className="buttons">
          <button>
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <button>
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
      <div className="conteudo">
        <div className="mesa">
          <div className="img">
            <img src={AssentoBancada} alt="Assento Bancada" />
          </div>
          <div className="text">
            <p>Assento para bancada Americana. (R$1.300,00)</p>
          </div>
        </div>
        <div className="mesa">
          <div className="img">
            <img src={AssentoBancada} alt="Assento Bancada" />
          </div>
          <div className="text">
            <p>Assento para bancada Americana. (R$1.300,00)</p>
          </div>
        </div>
        <div className="mesa">
          <div className="img">
            <img src={AssentoBancada} alt="Assento Bancada" />
          </div>
          <div className="text">
            <p>Assento para bancada Americana. (R$1.300,00)</p>
          </div>
        </div>
        <div className="mesa">
          <div className="img">
            <img src={AssentoBancada} alt="Assento Bancada" />
          </div>
          <div className="text">
            <p>Assento para bancada Americana. (R$1.300,00)</p>
          </div>
        </div>
      </div>
      <div className="conteudo">
        <div className="mesa">
          <div className="img">
            <img src={AssentoBancada} alt="Assento Bancada" />
          </div>
          <div className="text">
            <p>Assento para bancada Americana. (R$1.300,00)</p>
          </div>
        </div>
        <div className="mesa">
          <div className="img">
            <img src={AssentoBancada} alt="Assento Bancada" />
          </div>
          <div className="text">
            <p>Assento para bancada Americana. (R$1.300,00)</p>
          </div>
        </div>
        <div className="mesa">
          <div className="img">
            <img src={AssentoBancada} alt="Assento Bancada" />
          </div>
          <div className="text">
            <p>Assento para bancada Americana. (R$1.300,00)</p>
          </div>
        </div>
        <div className="mesa">
          <div className="img">
            <img src={AssentoBancada} alt="Assento Bancada" />
          </div>
          <div className="text">
            <p>Assento para bancada Americana. (R$1.300,00)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
