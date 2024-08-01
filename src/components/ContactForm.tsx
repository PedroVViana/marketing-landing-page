import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactForm: React.FC = () => (
  <section id="contact" className="relative py-20 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 overflow-hidden">
    <div className="absolute inset-0 bg-purple-300 opacity-50 blur-md"></div>
    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-800">Entre em Contato</h2>
      <div className="flex justify-center">
        <motion.form
          className="max-w-lg w-full bg-white p-10 rounded-lg shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <label className="flex items-center border-b-2 border-gray-300 py-3 relative">
              <FaUser className="absolute left-3 text-gray-600" />
              <input
                type="text"
                className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:border-purple-500 focus:outline-none transition-all duration-300 shadow-inner"
                placeholder="Nome"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="flex items-center border-b-2 border-gray-300 py-3 relative">
              <FaEnvelope className="absolute left-3 text-gray-600" />
              <input
                type="email"
                className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:border-purple-500 focus:outline-none transition-all duration-300 shadow-inner"
                placeholder="Email"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="flex flex-col relative border-b-2 border-gray-300 py-3">
              <textarea
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-purple-500 focus:outline-none transition-all duration-300 shadow-inner"
                rows={5}
                placeholder="Mensagem"
              />
            </label>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-4 font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane className="mr-2" />
            Enviar Mensagem
          </motion.button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactForm;
