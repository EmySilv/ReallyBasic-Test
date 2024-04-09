import React from "react";
import "./Header.style.css";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import BrandReally from "../../assets/brand_ReallyBasic.svg";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <header>
      <div className="container_header">
        <div className="brand">
          <img src={BrandReally} alt="logomarca" />
          <p>Really Basic</p>
        </div>

        <div className="search_Wrapper">
          <div className="search">
            <p>Pesquise mais produtos...</p>
            <button>
              <i className="ri-search-2-line" />
            </button>
          </div>

          <div className="login">
            <i className="ri-account-circle-fill" />
            <div className="legend">
              <button>Faça LOGIN ou</button>
              <button> CADASTRE-SE</button>
            </div>
          </div>
        </div>

        <div className="actions">
          <div className="home">
            <button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              <p>Início</p>
            </button>
          </div>
          <div className="company">
            <button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              <p>Empresa</p>
            </button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div className="menu">
                <p
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                >
                  Submenu
                </p>

                <p
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                >
                  Submenu
                </p>
                <p
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                >
                  Submenu
                </p>
                <p
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                >
                  Submenu
                </p>
              </div>
            </Popover>
          </div>
          <div className="client">
            <button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              <p>Clientes</p>
            </button>
          </div>
          <div className="contact">
            <button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              <p>Contato</p>
            </button>
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
