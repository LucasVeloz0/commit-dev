
import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../images/logo-400x100-white.png';

const Header = () => {
  return (
    <header id="header" className="bg-black text-white">
      {/* Menu no Topo */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo à Esquerda */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo Commit Dev" className="h-10 mr-4" />
        </div>
        {/* Links de Navegação */}
        <nav className="space-x-8">
          <Link
            to="header"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            Home
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            Soluções
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            Contato
          </Link>
        </nav>
      </div>

      {/* Conteúdo Central */}
      <div className="bg-white text-[#203359] text-center px-8 py-16 rounded-lg shadow-lg mx-8 mt-4 text-[#203359]">
        <h1 className="text-4xl font-regular mb-4 font-michroma">Vou criar seu site.</h1>
        <h2 className="text-2xl font-semibold mb-4 font-roboto">Seu negócio será visível por seus clientes com seu site rápido e seguro.</h2>
        <p className="text-lg mb-6 font-roboto">
        Criamos soluções web e aplicativos de alto desempenho.

Sites, sistemas web e aplicativos.
        </p>
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded float-right">
          Saiba Mais
        </button>
      </div>
    </header>
  );
};

export default Header;