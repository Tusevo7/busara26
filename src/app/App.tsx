import { Menu, X, ArrowRight, CheckCircle, Users, Target, TrendingUp, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Gestão de Projetos",
      description: "Implementação de metodologias ágeis e tradicionais para garantir o sucesso dos seus projetos.",
      image: "https://images.unsplash.com/photo-1758876201787-bd6ad98b7d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHByb2Zlc3Npb25hbCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Nzc4NDI2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Desenvolvimento de Carreira",
      description: "Planejamento estratégico de carreira e coaching profissional personalizado.",
      image: "https://images.unsplash.com/photo-1758876019673-704b039d405c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBkZXZlbG9wbWVudCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzc3ODQyNjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Consultoria Estratégica",
      description: "Análise e otimização de processos para impulsionar o crescimento do seu negócio.",
      image: "https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzc3ODQyNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, Tech Solutions",
      text: "A Busara26 transformou completamente nossa forma de gerir projetos. Resultados excepcionais!"
    },
    {
      name: "João Santos",
      role: "Gerente de Projetos",
      text: "O acompanhamento de carreira foi fundamental para meu crescimento profissional."
    },
    {
      name: "Ana Costa",
      role: "Diretora de RH",
      text: "Parceria estratégica que trouxe mudanças significativas para nossa organização."
    },
    {
      name: "Pedro Oliveira",
      role: "CTO, StartupX",
      text: "A metodologia aplicada pela Busara26 acelerou a entrega dos nossos projetos em 40%. Excelente trabalho!"
    },
    {
      name: "Carla Mendes",
      role: "Coordenadora de Projetos",
      text: "O coaching de carreira me ajudou a conquistar a promoção que tanto desejava. Recomendo!"
    },
    {
      name: "Ricardo Almeida",
      role: "Diretor Comercial",
      text: "Consultoria de alto nível que realmente entende as necessidades do negócio. Superou nossas expectativas!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#1e4a4a] flex items-center justify-center">
                <span className="text-[#ff6b35] font-bold text-lg">26</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#1e4a4a]">Busara26</h1>
                <p className="text-xs text-[#ff6b35]">ESTRATÉGIA E GESTÃO</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-[#ff6b35] transition">Início</a>
              <a href="#services" className="text-gray-700 hover:text-[#ff6b35] transition">Serviços</a>
              <a href="#about" className="text-gray-700 hover:text-[#ff6b35] transition">Sobre</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#ff6b35] transition">Depoimentos</a>
              <a href="#contact" className="bg-[#ff6b35] text-white px-6 py-2 rounded-lg hover:bg-[#e55a2a] transition">
                Contato
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-gray-700 hover:text-[#ff6b35] transition">Início</a>
                <a href="#services" className="text-gray-700 hover:text-[#ff6b35] transition">Serviços</a>
                <a href="#about" className="text-gray-700 hover:text-[#ff6b35] transition">Sobre</a>
                <a href="#testimonials" className="text-gray-700 hover:text-[#ff6b35] transition">Depoimentos</a>
                <a href="#contact" className="bg-[#ff6b35] text-white px-6 py-2 rounded-lg hover:bg-[#e55a2a] transition text-center">
                  Contato
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e4a4a] to-[#2d6363]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                A Mudança Começa com Estratégia
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Transformamos desafios em oportunidades através de gestão de projetos eficiente e desenvolvimento de carreira estratégico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2a] transition flex items-center justify-center gap-2">
                  Fale Conosco
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#1e4a4a] transition text-center">
                  Nossos Serviços
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://www.magnific.com/free-photo/african-man-black-suit-man-writing-glass_12042885.htm#fromView=search&page=1&position=2&uuid=6fba78ca-4b66-4e37-911a-1c44b2a0b3c0&query=negros+projecto"
                  alt="Equipe Busara26 colaborando em estratégias"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e4a4a] to-transparent p-6">
                  <div className="grid grid-cols-3 gap-4 text-white text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#ff6b35]">100+</div>
                      <div className="text-sm">Projetos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#ff6b35]">95%</div>
                      <div className="text-sm">Satisfação</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#ff6b35]">10+</div>
                      <div className="text-sm">Anos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e4a4a] mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas para impulsionar seu negócio e carreira
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#ff6b35] text-white p-3 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1e4a4a] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href="#contact" className="text-[#ff6b35] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Saiba mais
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://www.magnific.com/free-photo/close-up-person-working-alternative-energy_23668240.htm#fromView=search&page=1&position=8&uuid=6fba78ca-4b66-4e37-911a-1c44b2a0b3c0&query=negros+projecto"
                  alt="Profissional Busara26 trabalhando"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e4a4a]/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Excelência em Gestão</h3>
                    <p className="text-gray-200">Comprometidos com o seu sucesso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-[#1e4a4a] mb-6">Sobre a Busara26</h2>
              <p className="text-lg text-gray-600 mb-6">
                A Busara26 é uma empresa especializada em gestão de projetos e desenvolvimento de carreira,
                comprometida em transformar desafios em oportunidades através de estratégias eficientes e personalizadas.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nossa missão é ajudar organizações e profissionais a alcançarem seus objetivos através de
                metodologias comprovadas, expertise técnica e um profundo entendimento das necessidades de cada cliente.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Metodologias comprovadas e adaptadas à sua realidade</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Equipe experiente com certificações internacionais</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Resultados mensuráveis e sustentáveis</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-[#ff6b35] pl-4">
                  <div className="text-3xl font-bold text-[#1e4a4a]">100+</div>
                  <div className="text-gray-600">Projetos Concluídos</div>
                </div>
                <div className="border-l-4 border-[#ff6b35] pl-4">
                  <div className="text-3xl font-bold text-[#1e4a4a]">95%</div>
                  <div className="text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e4a4a] mb-4">O Que Dizem Nossos Clientes</h2>
            <p className="text-xl text-gray-600">Histórias de sucesso e transformação</p>
          </div>

          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={4000}
            pauseOnHover={true}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
            ]}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e4a4a] to-[#2d6363] flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-[#1e4a4a]">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-[#ff6b35] text-4xl mb-2 leading-none">"</div>
                  <p className="text-gray-600 italic">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://www.magnific.com/free-photo/university-students-learning-accounting-principles-financial-analysis_412391037.htm#fromView=search&page=1&position=4&uuid=6fba78ca-4b66-4e37-911a-1c44b2a0b3c0&query=negros+projecto"
            alt="Equipe Busara26"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1e4a4a]/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar seu Projeto?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos com estratégia e eficiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2a] transition font-semibold flex items-center justify-center gap-2">
              Fale Conosco Agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/+244947845946"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg hover:bg-[#20BA5A] transition font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e4a4a] to-[#2d6363]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Vamos Conversar?</h2>
              <p className="text-xl mb-8 text-gray-200">
                Entre em contato conosco e descubra como podemos ajudar você a alcançar seus objetivos.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff6b35] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-200">contato@busara26.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff6b35] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="text-gray-200">+244 947 845 946</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff6b35] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Localização</div>
                    <div className="text-gray-200">Angola</div>
                  </div>
                </div>

                <a
                  href="https://wa.me/+244947845946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-gray-200">+244 947 845 946</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/20 outline-none transition resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff6b35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a2a] transition font-semibold flex items-center justify-center gap-2"
                >
                  Enviar Mensagem
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e4a4a] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[#ff6b35] font-bold text-lg">26</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Busara26</h3>
                  <p className="text-xs text-[#ff6b35]">ESTRATÉGIA E GESTÃO</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Transformando desafios em oportunidades através de estratégia e gestão eficiente.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#services" className="hover:text-[#ff6b35] transition">Gestão de Projetos</a></li>
                <li><a href="#services" className="hover:text-[#ff6b35] transition">Desenvolvimento de Carreira</a></li>
                <li><a href="#services" className="hover:text-[#ff6b35] transition">Consultoria Estratégica</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-[#ff6b35] transition">Sobre Nós</a></li>
                <li><a href="#testimonials" className="hover:text-[#ff6b35] transition">Depoimentos</a></li>
                <li><a href="#contact" className="hover:text-[#ff6b35] transition">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>contato@busara26.com</li>
                <li>+244 947 845 946</li>
                <li>Angola</li>
                <li className="pt-2">
                  <a
                    href="https://wa.me/+244947845946"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#20BA5A] transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2026 Busara26. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+244947845946"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110 flex items-center justify-center z-50 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-20 bg-[#1e4a4a] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-semibold">
          Fale conosco!
        </span>
      </a>
    </div>
  );
}
