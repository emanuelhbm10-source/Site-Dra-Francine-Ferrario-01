import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  MapPin, 
  Phone, 
  Instagram, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  Award,
  Clock,
  ShieldCheck,
  Facebook,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'A Médica', href: '#about' },
    { name: 'Procedimentos', href: '#services' },
    { name: 'Localização', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/fran logo.png" 
            alt="Dra. Francine Ferrario Marschini" 
            className="h-12 md:h-16 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <span className={`hidden text-lg md:text-xl font-serif font-bold whitespace-nowrap ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>
            Dra. Francine Ferrario Marchesini
          </span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-brand-secondary ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5566997218585?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Francine%20Ferrario%20Marchesini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/5566997218585?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Francine%20Ferrario%20Marchesini" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold mt-4 text-center block"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-medium text-xs sm:text-sm mb-3">
            Oftalmologia & Plástica Ocular em Sinop, MT
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4 text-brand-primary">
            Realce a Beleza do seu Olhar com a <span className="text-brand-primary/80">Dra. Francine</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            Referência em Blefaroplastia e rejuvenescimento do olhar. Tecnologia avançada e cuidado personalizado para sua saúde ocular e autoestima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
            <a 
              href="https://wa.me/5566997218585?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Francine%20Ferrario%20Marchesini" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-primary/20 w-full sm:w-auto"
            >
              Agendar Consulta
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a 
              href="#services"
              className="bg-white hover:bg-gray-50 text-brand-primary border border-brand-primary/20 px-8 py-4 rounded-full font-bold text-sm transition-all shadow-sm flex items-center justify-center w-full sm:w-auto"
            >
              Ver Procedimentos
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <img 
              src="/Alta_JRS05950.jpg" 
              alt="Dra. Francine Ferrario Marschini" 
              className="w-full h-auto object-cover object-top [image-rendering:-webkit-optimize-contrast]"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000";
              }}
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 z-0 md:hidden opacity-10">
        <img 
          src="/Alta_JRS05950.jpg" 
          alt="Dra. Francine Background" 
          className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast]"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000";
          }}
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Cirurgias Realizadas', value: '1.500+' },
    { label: 'Pacientes Satisfeitos', value: '5.000+' },
    { label: 'Sinop e Região', value: 'Referência' },
    { label: 'Resultados', value: 'Naturais' },
  ];

  return (
    <section className="bg-brand-primary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-xl md:text-4xl font-serif font-bold text-brand-secondary mb-2">{stat.value}</div>
              <div className="text-[9px] sm:text-xs text-gray-300 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <div className="h-full min-h-[350px] md:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-brand-accent/30 relative">
              <img 
                src="/Alta_JRS05956.jpg" 
                alt="Dra. Francine Ferrario Marchesini" 
                className="w-full h-full object-cover object-top [image-rendering:-webkit-optimize-contrast]"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000";
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-1/3"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-secondary p-6 md:p-8 rounded-2xl shadow-xl text-white hidden lg:block max-w-xs">
              <Award size={32} className="mb-4" />
              <p className="font-serif text-lg md:text-xl font-bold italic leading-tight">"Excelência em cada detalhe, cuidado em cada olhar."</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center py-4 items-center md:items-start text-center md:text-left"
          >
            <h2 className="text-brand-secondary font-semibold tracking-widest uppercase text-sm mb-4">Sobre a Médica</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-brand-primary mb-4 leading-tight">
              Dra. Francine Ferrario Marchesini
            </h3>
            <p className="text-gray-600 text-base mb-3 leading-relaxed">
              A Dra. Francine Ferrario Marchesini é uma médica oftalmologista em Sinop MT, com foco em rejuvenescimento facial e blefaroplastia. Utiliza técnicas avançadas para resultados naturais, preservando a saúde ocular e buscando harmonia estética.
            </p>
            <p className="text-gray-600 text-base mb-4 leading-relaxed">
              Reconhecida por sua abordagem humanizada, ela atua no cuidado da área dos olhos, incluindo a retirada de bolsas de gordura e o posicionamento natural da sobrancelha.
            </p>
            
            <div className="space-y-3 mb-8 w-full">
              {[
                'Atendimento Humanizado',
                'Cirurgias de Pálpebras e Vias Lacrimais',
                'Pós-graduação em Estética Periocular',
                'Referência em Blefaroplastia a Laser'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-700 text-left">
                  <CheckCircle2 className="text-brand-secondary mt-0.5 shrink-0" size={18} />
                  <span className="font-medium text-sm md:text-base leading-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center md:items-start">
                <div className="text-brand-primary font-bold text-xl mb-1">Qualidade</div>
                <p className="text-sm text-gray-500">Equipamentos de última geração para sua segurança.</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="text-brand-primary font-bold text-xl mb-1">Confiança</div>
                <p className="text-sm text-gray-500">Transparência em todos os procedimentos.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Blefaroplastia Superior',
      description: 'Remoção do excesso de pele e bolsas de gordura das pálpebras superiores para um olhar mais aberto e descansado.',
      icon: <Eye className="text-brand-secondary" size={32} />,
    },
    {
      title: 'Blefaroplastia Inferior',
      description: 'Tratamento de bolsas de gordura e flacidez na região inferior dos olhos, eliminando o aspecto de cansaço constante.',
      icon: <ShieldCheck className="text-brand-secondary" size={32} />,
    },
    {
      title: 'Ptose Palpebral',
      description: 'Correção da queda da pálpebra superior que pode afetar a visão e a estética facial.',
      icon: <Award className="text-brand-secondary" size={32} />,
    },
    {
      title: 'Estética Periocular',
      description: 'Procedimentos complementares como toxina botulínica e preenchimentos para harmonização do olhar.',
      icon: <Clock className="text-brand-secondary" size={32} />,
    },
  ];

  return (
    <section id="services" className="py-16 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-secondary font-semibold tracking-widest uppercase text-sm mb-4">Procedimentos</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4">Soluções para o Olhar</h3>
          <p className="text-gray-600 text-base">
            Soluções avançadas para a saúde e estética dos seus olhos, com foco em resultados naturais e recuperação rápida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="mb-6 p-4 bg-brand-accent rounded-xl inline-block group-hover:bg-brand-secondary/10 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-brand-primary mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <button className="text-brand-secondary font-semibold flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                Saiba mais <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Mariana Silva",
      text: "A cirurgia mudou minha autoestima. O resultado ficou super natural e o atendimento da Dra. é impecável.",
      role: "Paciente de Blefaroplastia"
    },
    {
      name: "Roberto Almeida",
      text: "Excelente profissional. Explica tudo com muita clareza e passa muita segurança. Recomendo a todos em Sinop.",
      role: "Paciente de Ptose"
    },
    {
      name: "Ana Paula Costa",
      text: "Recuperação foi muito mais rápida do que eu imaginava. O olhar ficou renovado, sem parecer que fiz plástica.",
      role: "Paciente de Estética"
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4">O que dizem nossos pacientes</h3>
          <div className="w-20 h-1 bg-brand-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-brand-accent p-8 rounded-2xl relative"
            >
              <div className="text-brand-secondary mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              <div>
                <p className="font-bold text-brand-primary">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-16 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">Onde Estamos</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-brand-secondary/10 p-3 rounded-lg">
                  <MapPin className="text-brand-secondary" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Endereço</p>
                  <p className="text-gray-600">Av. das Embaúbas, 2748 - Jardim Maringá<br />Sinop - MT, 78556-271</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-secondary/10 p-3 rounded-lg">
                  <Phone className="text-brand-secondary" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Telefone / WhatsApp</p>
                  <p className="text-gray-600">(66) 99721-8585</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-secondary/10 p-3 rounded-lg">
                  <Clock className="text-brand-secondary" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Horário de Atendimento</p>
                  <p className="text-gray-600">Segunda a Sexta: 08:00 às 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5566997218585?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Francine%20Ferrario%20Marchesini" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 text-sm w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a 
                href="https://www.google.com/maps/dir//Av.+das+Emba%C3%BAbas,+2748+-+Jardim+Maring%C3%A1,+Sinop+-+MT,+78556-271/@-11.8583486,-55.5113824,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-primary text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all text-sm text-center w-full sm:w-auto"
              >
                Ver no Mapa
              </a>
            </div>
          </div>
          
          <div className="h-[400px] md:h-auto relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.471644722839!2d-55.5113824!3d-11.8583486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9339304918e9323f%3A0x633454316824633f!2sAv.%20das%20Emba%C3%BAbas%2C%202748%20-%20Jardim%20Maringa%2C%20Sinop%20-%20MT%2C%2078556-271!5e0!3m2!1spt-BR!2sbr!4v1712290000000!5m2!1spt-BR!2sbr" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Clínica Dra. Francine"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-10">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/fran logo.png" 
              alt="Dra. Francine Ferrario Marchesini" 
              className="h-16 md:h-20 w-auto object-contain mb-6 brightness-0 invert"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <span className="hidden text-2xl md:text-3xl font-serif font-bold text-white mb-6 block whitespace-nowrap">
              Dra. Francine Ferrario Marchesini
            </span>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              Experiência em cirurgia de pálpebras e oftalmologia clínica. Dedicada a oferecer o melhor em saúde ocular e estética facial em Sinop e região.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-secondary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-brand-secondary transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-brand-secondary transition-colors">A Médica</a></li>
              <li><a href="#services" className="hover:text-brand-secondary transition-colors">Procedimentos</a></li>
              <li><a href="#location" className="hover:text-brand-secondary transition-colors">Localização</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-secondary" />
                (66) 99721-8585
              </li>
              <li className="flex items-center gap-3">
                <a 
                  href="https://wa.me/5566997218585?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Francine%20Ferrario%20Marchesini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-brand-secondary transition-colors"
                >
                  <MessageCircle size={18} className="text-brand-secondary" />
                  Agendar via WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-secondary" />
                Sinop - Mato Grosso
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Dra. Francine Ferrario Marchesini. Todos os direitos reservados. CRM-MT 0000 / RQE 0000</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a 
      href="https://wa.me/5566997218585?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Francine%20Ferrario%20Marchesini"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-0 rounded-full shadow-2xl flex items-center justify-center overflow-hidden w-16 h-16"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        className="w-full h-full p-3"
        referrerPolicy="no-referrer"
      />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
