import { FaHandshake, FaChartLine, FaRocket } from 'react-icons/fa';

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 px-6 lg:px-12">
    <div className="container mx-auto">
      {/* Título */}
      <h2 className="text-5xl font-extrabold mb-12 text-gray-800 text-center animate__animated animate__fadeIn">
        Como Funciona?
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="relative bg-white p-8 rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-105 hover:shadow-3xl group animate__animated animate__fadeIn animate__delay-1s">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 opacity-20 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-blue-700 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:rotate-12">
              <FaHandshake className="text-white text-4xl" />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-blue-900">1. Consulta Inicial</h3>
            <p className="text-lg mb-4 text-gray-800">Agendamos uma consulta detalhada para entender suas necessidades e objetivos específicos.</p>
            <p className="text-sm text-gray-700">Nosso objetivo é conhecer seu negócio e oferecer a melhor solução personalizada.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white p-8 rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-105 hover:shadow-3xl group animate__animated animate__fadeIn animate__delay-2s">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-200 to-green-300 opacity-20 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-green-700 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:rotate-12">
              <FaChartLine className="text-white text-4xl" />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-green-900">2. Planejamento Estratégico</h3>
            <p className="text-lg mb-4 text-gray-800">Desenvolvemos um plano estratégico detalhado e personalizado para alcançar seus objetivos.</p>
            <p className="text-sm text-gray-700">Inclui análise de mercado, definição de metas e estratégias de marketing específicas.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white p-8 rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-105 hover:shadow-3xl group animate__animated animate__fadeIn animate__delay-3s">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 opacity-20 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-yellow-700 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:rotate-12">
              <FaRocket className="text-white text-4xl" />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-yellow-900">3. Implementação e Monitoramento</h3>
            <p className="text-lg mb-4 text-gray-800">Implementamos as estratégias e monitoramos os resultados para garantir a eficácia das ações.</p>
            <p className="text-sm text-gray-700">Ajustes contínuos são feitos com base nos dados coletados para otimizar o desempenho.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
