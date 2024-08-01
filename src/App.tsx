import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <HowItWorks />
    <Testimonials />
    <ContactForm />
    <Footer />
  </>
);

export default App;
