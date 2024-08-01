import { FaBullhorn, FaThumbsUp, FaSearch } from 'react-icons/fa';

const Services: React.FC = () => (
  <section id="services" className="py-20 px-5 md:px-10 lg:px-20 bg-gradient-to-r from-gray-100 to-white">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-extrabold mb-12 text-gray-800 animate__animated animate__fadeIn">Nossos Serviços</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="relative bg-white text-gray-900 p-8 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl group animate__animated animate__fadeIn animate__delay-1s">
          <div className="absolute inset-0 bg-blue-200 opacity-20 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center">
            <FaBullhorn className="text-6xl text-blue-600 mb-4 group-hover:text-blue-800 transition-colors duration-300" />
            <h3 className="text-3xl font-semibold mb-4">Consultoria de Marketing</h3>
            <p className="text-lg">Planejamento estratégico para alavancar suas vendas e melhorar sua presença no mercado.</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-200 to-blue-100 opacity-10 rounded-lg"></div>
        </div>
        <div className="relative bg-white text-gray-900 p-8 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl group animate__animated animate__fadeIn animate__delay-2s">
          <div className="absolute inset-0 bg-green-200 opacity-20 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center">
            <FaThumbsUp className="text-6xl text-green-600 mb-4 group-hover:text-green-800 transition-colors duration-300" />
            <h3 className="text-3xl font-semibold mb-4">Gestão de Mídias Sociais</h3>
            <p className="text-lg">Engajamento, criação de conteúdo e crescimento da sua marca nas redes sociais.</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-green-200 to-green-100 opacity-10 rounded-lg"></div>
        </div>
        <div className="relative bg-white text-gray-900 p-8 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl group animate__animated animate__fadeIn animate__delay-3s">
          <div className="absolute inset-0 bg-yellow-200 opacity-20 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center">
            <FaSearch className="text-6xl text-yellow-600 mb-4 group-hover:text-yellow-800 transition-colors duration-300" />
            <h3 className="text-3xl font-semibold mb-4">SEO e Marketing de Conteúdo</h3>
            <p className="text-lg">Melhore sua visibilidade nos motores de busca e atraia mais clientes com estratégias de SEO eficazes.</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 opacity-10 rounded-lg"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
