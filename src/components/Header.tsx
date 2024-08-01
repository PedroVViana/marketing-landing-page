import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaServicestack, FaInfoCircle, FaComments, FaEnvelope } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative px-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="container mx-auto p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">Logo Marketing</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#services" className="text-white flex items-center group hover:bg-blue-700 px-3 py-2 rounded-md transition-colors duration-300">
            <FaServicestack className="mr-2 text-xl group-hover:scale-110 transition-transform duration-300" /> Serviços
          </a>
          <a href="#how-it-works" className="text-white flex items-center group hover:bg-blue-700 px-3 py-2 rounded-md transition-colors duration-300">
            <FaInfoCircle className="mr-2 text-xl group-hover:scale-110 transition-transform duration-300" /> Como Funciona
          </a>
          <a href="#testimonials" className="text-white flex items-center group hover:bg-blue-700 px-3 py-2 rounded-md transition-colors duration-300">
            <FaComments className="mr-2 text-xl group-hover:scale-110 transition-transform duration-300" /> Depoimentos
          </a>
          <a href="#contact" className="text-white flex items-center group hover:bg-blue-700 px-3 py-2 rounded-md transition-colors duration-300">
            <FaEnvelope className="mr-2 text-xl group-hover:scale-110 transition-transform duration-300" /> Contato
          </a>
        </div>
        <div className="hidden md:flex">
          <a href="#contact" className="bg-yellow-300 text-blue-800 font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition-colors duration-300">Solicite um Orçamento</a>
        </div>
        <div className="md:hidden z-20">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-r from-blue-500 to-purple-600 p-4 z-20 flex flex-col items-center justify-center">
          <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none absolute top-4 right-4">
            <FaTimes className="w-6 h-6" />
          </button>
          <a href="#services" className="block text-white flex items-center group hover:bg-blue-700 px-3 py-2 rounded-md mb-2 transition-colors duration-300">
            <FaServicestack className="mr-2 text-xl group-hover:scale-110 transition-transform duration-300" /> Serviços
          </a>
          <a href="#how-it-works" className="block text-white flex items-center group hover:bg-blue-700 px-3 py-2 rounded-md mb-2 transition-colors duration-300">
            <FaInfoCircle className="mr-2 text-xl group-hover:scale-110 transition-transform duration-300" /> Como Funciona
          </a>
          <a href="#testimonials" className="block text-white flex items-center group hover:bg-blue-700 px-3 py-2 rounded-md mb-2 transition-colors duration-300">
            <FaComments className="mr-2 text-xl group-hover:scale-110 transition-transform duration-300" /> Depoimentos
          </a>
          <a href="#contact" className="block text-white flex items-center group hover:bg-blue-700 px-3 py-2 rounded-md mb-2 transition-colors duration-300">
            <FaEnvelope className="mr-2 text-xl group-hover:scale-110 transition-transform duration-300" /> Contato
          </a>
          <a href="#contact" className="block mt-4 bg-yellow-300 text-blue-800 font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition-colors duration-300">Solicite um Orçamento</a>
        </div>
      )}
    </header>
  );
};

export default Header;
