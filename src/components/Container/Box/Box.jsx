import "./Box.style.css";
import AssentoBancada from "../../../assets/assentoBancada.jpg";
import MesaAmadeirada from "../../../assets/mesaQuadriculada.jpg";
import MesaEscritorio from "../../../assets/mesaEscritorio.jpg";
import MesaEscritorio1 from "../../../assets/mesaEscritorio1.jpg";
import MesaJantar6 from "../../../assets/mesa6lugares.jpg";
import CadeiraAmamentação from "../../../assets/CadeiraAmamentaçao.jpg";
import SofaCasual from "../../../assets/sofaBranco.jpg";
import CadeiraBranca from "../../../assets/cadeiraBranca.jpg";

const Box = () => {
 const produtos = [
    {
      nome: "Assento para bancada Americana",
      preco: "(R$1.300,00)",
      imagem: AssentoBancada,
    },
    {
      nome: "Sofá Casual, três lugares",
      preco: "(R$3.800,00)",
      imagem: SofaCasual,
    },
    {
      nome: "Cadeira para Amamentação, duas peças",
      preco: "(R$1.800,00)",
      imagem: CadeiraAmamentação,
    },
    {
      nome: "Cadeiras de Descanso Estofadas",
      preco: "(R$1.200,00)",
      imagem: CadeiraBranca,
    },
  ];

  const produtos1 = [
    {
      nome: "Mesa Amadeirada com Quadrículos",
      preco: "(R$1.800,00)",
      imagem: MesaAmadeirada,
    },
    {
      nome: "Mesa Escritório, gavetas e suporte",
      preco: "(R$3.800,00)",
      imagem: MesaEscritorio,
    },
    {
      nome: "Mesa Escritorio, Madeira Branca",
      preco: "(R$1.500,00)",
      imagem: MesaEscritorio1,
    },
    {
      nome: "Mesa de Jantar 6 lugares",
      preco: "(R$2.200,00)",
      imagem: MesaJantar6,
    },
  ]

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
        {produtos.map((produto) => (
          <div  key={produto} className="mesa">
            <div className="img">
              <img src={produto.imagem} alt={produto.nome} />
            </div>
            <div className="text">
              <p>{produto.nome}</p>
              <p>{produto.preco}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="conteudo">
        {produtos1.map((produto) => (
          <div className="mesa">
            <div className="img">
              <img src={produto.imagem} alt={produto.nome} />
            </div>
            <div className="text">
              <p>{produto.nome}</p>
              <p>{produto.preco}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
