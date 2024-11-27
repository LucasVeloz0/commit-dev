import React from 'react';

const Contato = () => {
  return (
    <section id="contato" className="bg-black py-16 px-8 text-center">
      {/* Título */}
      <h2 className="text-3xl font-bold text-[#f54a0f] mb-6 font-roboto">
        Entre em Contato
      </h2>

      <p className="text-lg text-gray-100 font-roboto mb-8">
        Conecte-se conosco através das redes sociais ou envie uma mensagem pelo WhatsApp.
      </p>

      {/* Links das Redes Sociais */}
      <div className="flex justify-center gap-8">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-100 hover:text-[#f54a0f] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 mb-2"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.259.057 2.014.267 2.485.441.59.217 1.014.48 1.46.926.445.446.708.87.926 1.46.174.471.384 1.226.441 2.485.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.259-.267 2.014-.441 2.485-.217.59-.48 1.014-.926 1.46-.446.445-.87.708-1.46.926-.471.174-1.226.384-2.485.441-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.259-.057-2.014-.267-2.485-.441-.59-.217-1.014-.48-1.46-.926-.445-.446-.708-.87-.926-1.46-.174-.471-.384-1.226-.441-2.485-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.057-1.259.267-2.014.441-2.485.217-.59.48-1.014.926-1.46.446-.445.87-.708 1.46-.926.471-.174 1.226-.384 2.485-.441 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.766 0 8.357.013 7.052.072 5.745.13 4.642.312 3.853.644c-.83.345-1.523.805-2.217 1.5C.853 3.63.392 4.323.047 5.153.315 5.952.497 7.054.556 8.362c.059 1.305.072 1.714.072 4.047s-.013 2.742-.072 4.047c-.059 1.308-.241 2.41-.509 3.209.345.83.805 1.523 1.5 2.217.707.708 1.4 1.16 2.229 1.507.799.268 1.901.45 3.209.509 1.305.059 1.714.072 4.047.072s2.742-.013 4.047-.072c1.308-.059 2.41-.241 3.209-.509.83-.345 1.523-.805 2.217-1.5.708-.707 1.16-1.4 1.507-2.229.268-.799.45-1.901.509-3.209.059-1.305.072-1.714.072-4.047s-.013-2.742-.072-4.047c-.059-1.308-.241-2.41-.509-3.209-.345-.83-.805-1.523-1.5-2.217-.707-.708-1.4-1.16-2.229-1.507-.799-.268-1.901-.45-3.209-.509C15.742.013 15.333 0 12 0zM12 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.163a3.837 3.837 0 110-7.674 3.837 3.837 0 010 7.674zm4.406-11.345a1.44 1.44 0 100-2.881 1.44 1.44 0 000 2.881z" />
          </svg>
          Instagram
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/seuperfil" // Substitua pelo link do seu perfil
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-100 hover:text-[#f54a0f] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 mb-2"
          >
            <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.33v21.339C0 23.402.598 24 1.33 24h11.499v-9.294H9.837V11.09h2.992V8.419c0-2.965 1.805-4.577 4.443-4.577 1.262 0 2.349.093 2.663.135v3.088h-1.826c-1.432 0-1.709.681-1.709 1.681v2.2h3.417l-.447 3.616h-2.97V24h5.818c.732 0 1.33-.598 1.33-1.33V1.33C24 .598 23.402 0 22.675 0z" />
          </svg>
          <p>Facebook</p>
        </a>

           {/* WhatsApp */}
        <a
          href="https://wa.me/5515996012951" // Substitua pelo número do WhatsApp com o código do país
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-100 hover:text-[#f54a0f] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 mb-2"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.029-.963-.271-.1-.467-.149-.662.149-.197.297-.758.963-.929 1.161-.17.197-.342.223-.639.074-.297-.149-1.255-.463-2.39-1.476-.884-.787-1.48-1.758-1.653-2.056-.173-.297-.019-.458.13-.606.134-.133.297-.346.446-.519.149-.173.198-.297.298-.495.099-.198.05-.371-.025-.519-.075-.148-.662-1.595-.907-2.182-.238-.572-.479-.495-.662-.495-.173-.009-.371-.012-.57-.012-.198 0-.518.074-.789.371-.271.297-1.04 1.015-1.04 2.479 0 1.463 1.065 2.875 1.213 3.071.149.198 2.094 3.2 5.071 4.487.709.305 1.263.487 1.695.623.712.227 1.36.195 1.87.118.571-.084 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.271-.198-.57-.346zm-5.472-11.382c-5.523 0-10 4.477-10 10 0 1.767.464 3.514 1.349 5.035l-1.399 4.01 4.154-1.364c1.443.787 3.057 1.204 4.896 1.204 5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 18.407c-1.576 0-3.11-.423-4.428-1.222l-.317-.19-2.462.809.825-2.394-.205-.307c-.815-1.224-1.26-2.654-1.26-4.103 0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contato;