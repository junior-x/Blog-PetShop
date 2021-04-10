import React from "react";
import imagem from "../assets/images/doguito.svg";
import "../assets/css/componentes/cabecalho.css";

const Cabecalho = () => {
    return(
        <Header className="cabecalho container">

            <div className="menu-hamburger">
                <span className="menu-hamburger__icone"></span>
            </div>
            <div className="cabecalho-container">
                <a href="/" className="flex flex--centro">
                    <img 
                    className="cabecalho__logo" 
                    src={imagem} 
                    alt="Logo Doguito"/>
                    <h1 className="cabecalho__titulo">PetShop</h1>
                </a>
            </div>

            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><a href="#" className="menu-item--entrar">Entrar</a></li>
                    <li><a href="#" className="menu-item">Produtos</a></li>
                    <li><a href="/" className="menu-item">Blog</a></li>
                    <li><a href="/sobre" className="menu-item">Sobre</a></li>
                </ul>
            </nav>
            <div className="menu-cabecalho-background"></div>

        </Header>
    );
}

export default Cabecalho;