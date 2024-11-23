import React from 'react';

const Home = () => {
  return (
    <section id="home" className="bg-black py-16 px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-rigth w-full">
        {/* Div do Título (h2) */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#f54a0f] mb-4 font-roboto">
            Por que ter um site profissional
            <br />
            é essencial para o seu negócio?
          </h2>
        </div>
        
        {/* Parágrafo (p) */}
        <div className="flex-1">
          <p className="text-lg text-gray-100 font-roboto">
            Ter um site profissional não é apenas um diferencial, é uma necessidade. Seu site será a porta de entrada para clientes conhecerem sua
            empresa, seus serviços e produtos. Ele é uma vitrine aberta 24 horas por dia, oferecendo informações relevantes e mostrando que sua marca
            está preparada para atender às demandas.
          </p>
        </div>
      </div>

      {/* Novo Título (h2) */}
      <div className="flex flex-col items-center justify-center text-center mt-12">
        <h2 className="text-3xl font-bold text-[#f54a0f] mb-4 font-roboto">
          Somos especialistas em criar sites sob medida, focados em resultados.
        </h2>
        <p className="text-lg text-gray-100 font-roboto">
          Cada projeto é desenvolvido com um design exclusivo, pensado para valorizar sua marca e conquistar novos clientes.
        </p>
      </div>

      {/* Novas Divs: Esquerda com Parágrafo e Botão, Direita com Lista */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-20 mt-16">
        {/* Div Esquerda - Parágrafo e Botão */}
        <div className="flex-1 text-center md:text-right">
          <p className="text-lg text-[#f54a0f] font-roboto mb-4">
          Vamos transformar sua ideia!
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Clique Aqui
          </button>
        </div>

        {/* Div Direita - Lista */}
        <div className="flex-1 text-left">
          <ul className="list-disc text-lg text-gray-100 pl-6">
            <li>Criação de sites otimizados para SEO</li>
            <li>Desenvolvimento de e-commerce eficaz</li>
            <li>Design responsivo e amigável</li>
            <li>Estratégias de marketing digital personalizadas</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;