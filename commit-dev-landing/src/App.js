// src/App.js
import React from 'react';

function App() {
  return (
    <div className="App">
      <header
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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Saiba mais
          </button>
        </div>
      </header>

      {/* Seção de Serviços */}
      <section className="services py-12 px-6 text-center bg-gray-100 relative z-10">
        <h2 className="text-3xl font-semibold mb-6">Nossos Serviços</h2>
        <ul className="text-left max-w-lg mx-auto">
          <li>- Criação de sites personalizados com foco em SEO</li>
          <li>- Aplicações web modernas e otimizadas</li>
          <li>- Estratégias de SEO para aumentar o tráfego orgânico</li>
          <li>- Integração de soluções de e-commerce e sistemas web</li>
        </ul>
      </section>

      {/* Seção de Modelos de Sites */}
      <section className="catalog py-12 px-6 bg-white relative z-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Modelos de Sites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Modelo 1 */}
          <div className="site-card border rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/site-modelo-1.jpg"
              alt="Modelo de Site 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Modelo de Site 1</h3>
              <p className="text-gray-700">
                Um site moderno e minimalista, ideal para pequenas empresas.
              </p>
            </div>
          </div>

          {/* Modelo 2 */}
          <div className="site-card border rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/site-modelo-2.jpg"
              alt="Modelo de Site 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Modelo de Site 2</h3>
              <p className="text-gray-700">
                Perfeito para portfólios de criativos e freelancers.
              </p>
            </div>
          </div>

          {/* Modelo 3 */}
          <div className="site-card border rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/site-modelo-3.jpg"
              alt="Modelo de Site 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Modelo de Site 3</h3>
              <p className="text-gray-700">
                Design focado em e-commerce com otimização para SEO.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2024 Commit Dev. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
