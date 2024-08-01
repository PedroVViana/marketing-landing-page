import { FaStar } from 'react-icons/fa';

// Adicione as URLs das fotos dos clientes aqui
const clientPhotos = [
  'https://via.placeholder.com/100', // Foto para João Silva
  'https://via.placeholder.com/100', // Foto para Maria Oliveira
  'https://via.placeholder.com/100', // Foto para Pedro Santos
];

const testimonials = [
  {
    quote: "A Vanlume transformou nosso marketing digital e aumentou nossas vendas significativamente!",
    name: "João Silva",
    company: "Empresa XYZ",
  },
  {
    quote: "Profissionais dedicados e com uma visão estratégica incrível. Recomendo!",
    name: "Maria Oliveira",
    company: "Empresa ABC",
  },
  {
    quote: "Nosso engajamento nas redes sociais nunca esteve tão alto. Obrigado, Vanlume!",
    name: "Pedro Santos",
    company: "Empresa 123",
  },
];

const Testimonials: React.FC = () => (
  <section id="testimonials" className="bg-gradient-to-r from-gray-100 to-white py-20 px-6 lg:px-12">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12 animate__animated animate__fadeIn">
        Depoimentos de Clientes
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl group animate__animated animate__fadeIn"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 opacity-10 rounded-xl"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300 shadow-xl mb-6">
                <img src={clientPhotos[index]} alt="Cliente" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-center mb-6">
                <FaStar className="text-yellow-400 text-4xl animate__animated animate__pulse animate__delay-1s" />
                <FaStar className="text-yellow-400 text-4xl animate__animated animate__pulse animate__delay-2s" />
                <FaStar className="text-yellow-400 text-4xl animate__animated animate__pulse animate__delay-3s" />
                <FaStar className="text-yellow-400 text-4xl animate__animated animate__pulse animate__delay-4s" />
                <FaStar className="text-yellow-400 text-4xl animate__animated animate__pulse animate__delay-5s" />
              </div>
              <p className="text-xl mb-4 text-gray-800 italic">"{testimonial.quote}"</p>
              <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
              <p className="text-gray-700">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
