import React from 'react';

const Hero: React.FC = () => (
  <section className="relative bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20 md:py-32 overflow-hidden">
    <div className="container mx-auto text-center px-4 relative z-10">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fadeInUp">
        Impulsione seu Negócio com Estratégias de Marketing Eficazes
      </h2>
      <p className="text-xl md:text-2xl lg:text-3xl mb-8 drop-shadow-md animate-fadeInUp delay-200">
        Transforme sua presença online e conquiste mais clientes com nossa assessoria de marketing especializada.
      </p>
      <a
        href="#contact"
        className="bg-yellow-400 text-blue-900 px-8 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-fadeInUp delay-400"
      >
        Peça uma Consultoria Gratuita
      </a>
    </div>
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center opacity-25"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-75"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
      <div className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
    </div>
  </section>
);

export default Hero;
