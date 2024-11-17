import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header
      id="header"
      className="bg-cover bg-center h-screen text-white flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url("/images/commit-dev.webp")',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Commit Dev - Soluções Web de Alto Desempenho</h1>
        <p className="text-xl mb-8">
          Criamos sites e aplicações otimizados para aumentar sua visibilidade e conversões.
        </p>
        <Link
  to="services"
  smooth={true}
  duration={500}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
>
  Saiba mais
</Link>
      </div>
    </header>
  );
};

export default Header;