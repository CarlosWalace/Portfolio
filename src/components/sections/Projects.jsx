import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaVuejs,
  FaNodeJs, FaCss3, FaHtml5,
} from "react-icons/fa";
import {
  SiJavascript, SiMysql, SiWordpress, SiWoocommerce, SiElementor, SiPhp,
  SiMongodb,
} from "react-icons/si";
//imports de imagens ChampionSphere
import img1Champion from '../../assets/images/championsphere/Criacao-de-Conta.png'
import img2Champion from '../../assets/images/championsphere/Login.png'
import img3Champion from '../../assets/images/championsphere/Edicao-de-Perfil.png'
import img4Champion from '../../assets/images/championsphere/Painel-de-Eventos.png'
import img5Champion from '../../assets/images/championsphere/Criacao-de-um-Novo-Evento.png'
import img6Champion from '../../assets/images/championsphere/Edicao-de-Eventos.png'
import img7Champion from '../../assets/images/championsphere/V-LIBRAS-funcionando.png'
//imports de imagens Lafloratta
import img1Lafloratta from '../../assets/images/lafloratta/Pg_Inicial_Lafloratta.png'
import img2Lafloratta from '../../assets/images/lafloratta/Pg_Registro_Lafloratta.png'
import img3Lafloratta from '../../assets/images/lafloratta/Pg_Produtos_Lafloratta.png'
import img4Lafloratta from '../../assets/images/lafloratta/Pg_Footer_Lafloratta.png'
//imports de imagens MantoRaiz
import img1Mantoraiz from '../../assets/images/mantoraiz/Pg_Inicial_Mantoraiz.png'
import img2Mantoraiz from '../../assets/images/mantoraiz/Pg_Registro_Mantoraiz.png'
import img3Mantoraiz from '../../assets/images/mantoraiz/Pg_Produtos_Mantoraiz.png'
import img4Mantoraiz from '../../assets/images/mantoraiz/Pg_Footer_Mantoraiz.png'
//import de FastCar
import img1Fastcar from '../../assets/images/fastcar/Pg_Inicial_Fastcar.png'
import img2Fastcar from '../../assets/images/fastcar/Pg_Inicial_Fastcar.png'
import img3Fastcar from '../../assets/images/fastcar/Pg_Servicos_Fastcar.png'
import img4Fastcar from '../../assets/images/fastcar/Pg_Sobrenos_Fastcar.png'
//import de Nexthouse
import img1Nexthouse from '../../assets/images/nexthouse/Pg_Inicial_Nexthouse.png'
import img2Nexthouse from '../../assets/images/nexthouse/Pg_Sobrenos_Nexthouse.png'
import img3Nexthouse from '../../assets/images/nexthouse/Pg_Missao_Nexthouse.png'
import img4Nexthouse from '../../assets/images/nexthouse/Pg_Servicos_Nexthouse1.png'
import img5Nexthouse from '../../assets/images/nexthouse/Pg_Servicos_Nexthouse2.png'
import img6Nexthouse from '../../assets/images/nexthouse/Pg_Contato_Nexthouse.png'
//import de Alttravel
import img1Alttravel from '../../assets/images/alttravel/Pg_Inicial_Alttravel.png'
import img2Alttravel from '../../assets/images/alttravel/Pg_Sobrenos_Alttravel.png'
import img3Alttravel from '../../assets/images/alttravel/Pg_Citytour_Alttravel.png'
import img4Alttravel from '../../assets/images/alttravel/Pg_Transfer_Alttravel.png'
import img5Alttravel from '../../assets/images/alttravel/Pg_Depoimentos_Alttravel.png'

import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "ChampionSphere",
      description: t("Fullstack application with user management and event creation, designed for the gaming community, with a strong focus on accessibility for users with sensory disabilities."),
      images: [
        { src: img1Champion, title: t("Account Creation") },
        { src: img2Champion, title: t("Login") },
        { src: img3Champion, title: t("Profile Editing") },
        { src: img4Champion, title: t("Event Dashboard") },
        { src: img5Champion, title: t("Create a New Event") },
        { src: img6Champion, title: t("Event Editing") },
        { src: img7Champion, title: t("V-LIBRAS Working") },
      ],
      link: "https://github.com/CarlosWalace/ChampionSphere",
      technologies: [
        { name: "Vue.js", icon: <FaVuejs className="text-green-500 text-xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-xl" /> },
      ]
    },
    {
      title: "Lafloratta",
      description: t("As part of a technology agency team, I participated in the development of a full-featured e-commerce store for the clothing niche. The project was built on WordPress with WooCommerce and featured multiple integrated payment gateways."),
      images: [
        { src: img1Lafloratta, title: t("Página Inicial") },
        { src: img2Lafloratta, title: t("Catálogo de Produtos") },
        { src: img3Lafloratta, title: t("Carrinho de Compras") },
        { src: img4Lafloratta, title: t("Checkout") },
      ],
      link: "https://lafloratta.com",
      technologies: [
        { name: "WordPress", icon: <SiWordpress className="text-blue-600 text-xl" /> },
        { name: "WooCommerce", icon: <SiWoocommerce className="text-purple-600 text-xl" /> },
        { name: "Elementor", icon: <SiElementor className="text-orange-500 text-xl" /> },
        { name: "PHP", icon: <SiPhp className="text-purple-500 text-xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
        { name: "CSS3", icon: <FaCss3 className="text-blue-500 text-xl" /> },
      ]
    },
    {
      title: "Mantoraiz",
      description: t("As part of a technology agency team, I participated in the development of a full-featured e-commerce store for the clothing niche. The project was built on WordPress with WooCommerce and featured multiple integrated payment gateways."),
      images: [
        { src: img1Mantoraiz, title: t("Home Page") },
        { src: img2Mantoraiz, title: t("Product Catalog") },
        { src: img3Mantoraiz, title: t("Shopping Cart") },
        { src: img4Mantoraiz, title: t("Footer Section") },
      ],
      link: "https://mantoraiz.com",
      technologies: [
        { name: "WordPress", icon: <SiWordpress className="text-blue-600 text-xl" /> },
        { name: "WooCommerce", icon: <SiWoocommerce className="text-purple-600 text-xl" /> },
        { name: "Elementor", icon: <SiElementor className="text-orange-500 text-xl" /> },
        { name: "PHP", icon: <SiPhp className="text-purple-500 text-xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
        { name: "CSS3", icon: <FaCss3 className="text-blue-500 text-xl" /> },
      ]
    },
    {
      title: "Fastcar Mecânica",
      description: t("As part of a technology agency team  I participated in the development of a conversion-Focused Landing Page for Automotive Services. Built a high-converting one-page website for an auto repair shop, featuring service showcases and an integrated appointment booking system."),
      images: [
        { src: img1Fastcar, title: t("Home Page") },
        { src: img2Fastcar, title: t("About Us") },
        { src: img3Fastcar, title: t("Services") },
        { src: img4Fastcar, title: t("Contact") },
      ],
      link: "https://fastcarmecanica.com",
      technologies: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
        { name: "CSS3", icon: <FaCss3 className="text-blue-500 text-xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-xl" /> },
      ]
    },
    {
      title: "Nexthouse",
      description: t("As part of a technology agency team  I participated in the development of a real Estate Management Platform Landing Page. Created a modern, engaging interface for a property management company, highlighting key service differentiators and driving lead generation."),
      images: [
        { src: img1Nexthouse, title: t("Home Page") },
        { src: img2Nexthouse, title: t("About Us") },
        { src: img3Nexthouse, title: t("Mission") },
        { src: img4Nexthouse, title: t("Services 1") },
        { src: img5Nexthouse, title: t("Services 2") },
        { src: img6Nexthouse, title: t("Contact") },
      ],
      link: "https://nexthousegestao.com.br",
      technologies: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
        { name: "CSS3", icon: <FaCss3 className="text-blue-500 text-xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-xl" /> },
      ]
    },
    {
      title: "Alttravel",
      description: t("As part of a technology agency team I participated in the development of a modern Landing Page for Travel Transportation Services. Developed a responsive landing page for travel transfer services with intuitive booking interface and real-time quote calculations, including forms sent via WhatsApp."),
      images: [
        { src: img1Alttravel, title: t("Home Page") },
        { src: img2Alttravel, title: t("About Us") },
        { src: img3Alttravel, title: t("City Tours") },
        { src: img4Alttravel, title: t("Transfers") },
        { src: img5Alttravel, title: t("Testimonials") },
      ],
      link: "https://alttravel.com.br",
      technologies: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
        { name: "CSS3", icon: <FaCss3 className="text-blue-500 text-xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-xl" /> },
      ]
    }
  ];

  const [currentImageIndices, setCurrentImageIndices] = useState(projects.map(() => 0));
  const [currentTechIndices, setCurrentTechIndices] = useState(projects.map(() => 0));
  const [expandedProjects, setExpandedProjects] = useState(projects.map(() => false));

  const nextImage = (projectIndex) => {
    setCurrentImageIndices(prev => {
      const newIndices = [...prev];
      newIndices[projectIndex] = (newIndices[projectIndex] + 1) % projects[projectIndex].images.length;
      return newIndices;
    });
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndices(prev => {
      const newIndices = [...prev];
      newIndices[projectIndex] = (newIndices[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length;
      return newIndices;
    });
  };

  const toggleReadMore = (projectIndex) => {
    setExpandedProjects(prev => {
      const newExpanded = [...prev];
      newExpanded[projectIndex] = !newExpanded[projectIndex];
      return newExpanded;
    });
  };

  const getVisibleTechnologies = (projectIndex) => {
    const technologies = projects[projectIndex].technologies || [];
    const itemsPerPage = 4;
    const startIndex = currentTechIndices[projectIndex] * itemsPerPage;
    return technologies.slice(startIndex, startIndex + itemsPerPage);
  };

  const getTotalTechPages = (projectIndex) => {
    const technologies = projects[projectIndex].technologies || [];
    const itemsPerPage = 4;
    return Math.ceil(technologies.length / itemsPerPage);
  };

  const nextTechSlide = (projectIndex) => {
    const technologies = projects[projectIndex].technologies || [];
    const itemsPerPage = 4;
    const totalPages = Math.ceil(technologies.length / itemsPerPage);

    setCurrentTechIndices(prev => {
      const newIndices = [...prev];
      newIndices[projectIndex] = (newIndices[projectIndex] + 1) % totalPages;
      return newIndices;
    });
  };

  const prevTechSlide = (projectIndex) => {
    const technologies = projects[projectIndex].technologies || [];
    const itemsPerPage = 4;
    const totalPages = Math.ceil(technologies.length / itemsPerPage);

    setCurrentTechIndices(prev => {
      const newIndices = [...prev];
      newIndices[projectIndex] = (newIndices[projectIndex] - 1 + totalPages) % totalPages;
      return newIndices;
    });
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t("Featured Projects")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className="glass p-6 rounded-xl border border-purple-500 hover:-translate-y-1 hover:border-purple-300 transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                {/* Descrição com limite de 3 linhas e botão Read More */}
                <div className="mb-4">
                  <p
                    className={`text-gray-400 transition-all duration-300 ${expandedProjects[projectIndex]
                      ? 'line-clamp-none'
                      : 'line-clamp-3'
                      }`}
                  >
                    {project.description}
                  </p>
                  <button
                    onClick={() => toggleReadMore(projectIndex)}
                    className="text-green-400 hover:text-purple-300 transition-colors text-sm mt-1"
                  >
                    {expandedProjects[projectIndex] ? t('Read Less') : t('Read More')}
                  </button>
                </div>

                <h4 className="text-sm font-semibold text-gray-300 mb-2 text-center">
                  {project.images[currentImageIndices[projectIndex]].title}
                </h4>

                {/* Carrossel de imagens */}
                <div className="mb-4 overflow-hidden rounded-xl relative">
                  <img
                    src={project.images[currentImageIndices[projectIndex]].src}
                    alt={`${project.title} - ${project.images[currentImageIndices[projectIndex]].title}`}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <button
                    onClick={(e) => { e.preventDefault(); prevImage(projectIndex); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-purple-500 transition"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => { e.preventDefault(); nextImage(projectIndex); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-purple-500 transition"
                  >
                    →
                  </button>
                  <div className="flex justify-center gap-1 mt-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentImageIndices(prev => {
                            const newIndices = [...prev];
                            newIndices[projectIndex] = index;
                            return newIndices;
                          });
                        }}
                        className={`w-2 h-2 rounded-full ${index === currentImageIndices[projectIndex]
                          ? 'bg-green-500'
                          : 'bg-white/50 hover:bg-purple-500'
                          } transition`}
                      />
                    ))}
                  </div>
                </div>

                {/* Tecnologias - Agora única seção */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-3 text-gray-300 text-center">
                    {t("Technologies Used")}
                  </h4>

                  <div className="relative">
                    <div className="flex justify-between items-center">
                      {getTotalTechPages(projectIndex) > 1 && (
                        <button
                          onClick={(e) => { e.preventDefault(); prevTechSlide(projectIndex); }}
                          className="absolute left-0 z-10 bg-green-500/20 hover:bg-green-500/30 p-1 rounded-full transition-all transform -translate-y-1/2 top-1/2"
                        >
                          <IoIosArrowBack className="text-green-400 text-sm" />
                        </button>
                      )}

                      <div className="flex justify-center space-x-3 py-2 px-8 w-full transition-all duration-300">
                        {getVisibleTechnologies(projectIndex).map((tech, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-green-500/10 p-2 rounded-lg w-[70px] h-[70px] border border-green-500/30 hover:bg-green-300/20 transition-all transform hover:-translate-y-1"
                          >
                            <div className="mb-1">{tech.icon}</div>
                            <span className="text-xs text-gray-300 text-center">{tech.name}</span>
                          </div>
                        ))}
                      </div>

                      {getTotalTechPages(projectIndex) > 1 && (
                        <button
                          onClick={(e) => { e.preventDefault(); nextTechSlide(projectIndex); }}
                          className="absolute right-0 z-10 bg-green-500/20 hover:bg-green-500/30 p-1 rounded-full transition-all transform -translate-y-1/2 top-1/2"
                        >
                          <IoIosArrowForward className="text-green-400 text-sm" />
                        </button>
                      )}
                    </div>

                    {getTotalTechPages(projectIndex) > 1 && (
                      <div className="flex justify-center mt-2 space-x-1">
                        {Array.from({ length: getTotalTechPages(projectIndex) }).map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTechIndices(prev => {
                              const newIndices = [...prev];
                              newIndices[projectIndex] = index;
                              return newIndices;
                            })}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${currentTechIndices[projectIndex] === index ? 'bg-green-500 w-4' : 'bg-gray-500'
                              }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-purple-300 transition-colors my-4"
                  >
                    {t("View Project →")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};