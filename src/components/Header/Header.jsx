import React from "react";
import "./Header.style.css";
import BrandReally from "../../assets/brand_ReallyBasic.svg";

const Header = () => {
  return (
    <header>
      <div className="container_header">
        <div className="brand">
          <img src={BrandReally} alt="logomarca" />
          <p>Really Basic</p>
        </div>

        <div className="search_Wrapper">
          <div className="search">
            <button>Pesquise mais produtos...</button>
            <i className="ri-search-2-line"></i>
          </div>

          <div className="login">
            <i className="ri-account-circle-fill" />
            <div className="legend">
              <button>Faça LOGIN ou </button>
              <button> CADASTRE-SE</button>
            </div>
          </div>
        </div>

        <div className="actions">
          <div className="home">
            <button>Início</button>
          </div>
          <div className="company">
            <button>Empresa</button>
          </div>
          <div className="client">
            <button>Clientes</button>
          </div>
          <div className="contact">
            <button>Contato</button>
          </div>
        </div>

        <div className="cart">
          <i className="ri-shopping-cart-2-line"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
