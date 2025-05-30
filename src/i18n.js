import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "home": "Home",
          "about": "About",
          "projects": "Projects",
          "contact": "Contact",
          "welcome": "Welcome",
          "myProjects": "My Projects",
          "sendMessage": "Send Message",
          "Hi, I'm Carlos": "Hi, I'm Carlos",
          "homeDescription": "I’m a full-stack developer with professional and academic experience.",
          "View Projects": "View Projects",
          "Contact Me": "Contact Me",
          "About Me": "About Me",
          "DeveloperExperience" : "Developer with experience in building full stack web applications.",
          "TechStack": "Tech Stack",
          "Frontend": "Frontend",
          "Backend": "Backend",
          "No technologies to display": "No technologies to display",
          "Education": "Education",
          "Bachelor in Computer Science": "Bachelor in Computer Science",
          "Puc Minas University": "Puc Minas University",
          "Graduated in 2024": "Graduated in 2024",
          "educationDescription": "During my Computer Science degree, I gained a solid foundation in software development, algorithms, data structures, databases, computer networks, and operating systems. The program emphasized problem-solving, logical thinking, and hands-on experience through academic projects. I learned fundamental skills in languages such as Java and C, and explored areas like web development, AI, and cybersecurity. Most importantly, I learned to focus on solving problems rather than becoming attached to specific tools or technologies.",
          "Certificates & Qualifications": "Certificates & Qualifications",
          "Courses": "Courses",
          "Workshops": "Workshops",
          "Work Experience": "Work Experience",
          "Trainee": "Trainee",
          "Junior": "Junior",
          "Additional responsibilities included:": "Additional responsibilities included:",
          "Data analysis and organization in SAP.": "Data analysis and organization in SAP.",
          "Administrative support using Excel.": "Administrative support using Excel.",
          "Development and maintenance of legacy systems using JavaScript and jQuery on the TOTVS Fluig enterprise management platform. I worked with a focus on BPM (Business Process Management), modeling, automating, and managing business processes, as well as ECM (Enterprise Content Management), handling document management, version control, and approval workflows.": "Development and maintenance of legacy systems using JavaScript and jQuery on the TOTVS Fluig enterprise management platform. I worked with a focus on BPM (Business Process Management), modeling, automating, and managing business processes, as well as ECM (Enterprise Content Management), handling document management, version control, and approval workflows.",
          "Key Tasks: Development of customized forms Creation and maintenance of workflows (approval flows) Report generation using BIRT Data manipulation with Oracle SQL, including specific queries to populate Excel-based dashboards": "Key Tasks: Development of customized forms Creation and maintenance of workflows (approval flows) Report generation using BIRT Data manipulation with Oracle SQL, including specific queries to populate Excel-based dashboards",
          "Data manipulation using Oracle SQL, including specific queries to populate Excel-based dashboards.": "Data manipulation using Oracle SQL, including specific queries to populate Excel-based dashboards.",
          "Technical support and troubleshooting for network-related issues": "Technical support and troubleshooting for network-related issues",
          "Network inspection and identification of physical faults": "Network inspection and identification of physical faults",
          "CurimbabaDescription": "Development and maintenance of legacy systems using JavaScript and jQuery on the TOTVS Fluig enterprise management platform. I worked with a focus on BPM (Business Process Management), modeling, automating, and managing business processes, as well as ECM (Enterprise Content Management), handling document management, version control, and approval workflows.",
          "CurimbabaKeyTasks": "Key Tasks: Development of customized forms, creation and maintenance of workflows (approval flows), report generation using BIRT, data manipulation with Oracle SQL, including specific queries to populate Excel-based dashboards.",
          "CurimbabaDataManipulation": "Data manipulation using Oracle SQL, including specific queries to populate Excel-based dashboards.",
          "TelemidiaSupport": "Technical support and troubleshooting for network-related issues",
          "TelemidiaInspection": "Network inspection and identification of physical faults",
          "Featured Projects": "Featured Projects",
          "Technologies Used:": "Technologies Used:",
          "View Project →": "View Project →",
          "Account Creation": "Account Creation",
          "Create a New Event": "Create a New Event",
          "Profile Editing": "Profile Editing",
          "Event Dashboard": "Event Dashboard",
          "Event Editing": "Event Editing",
          "V-LIBRAS Working": "V-LIBRAS Working",
          "Fullstack application with user management and event creation, designed for the gaming community, with a strong focus on accessibility for users with sensory disabilities.": "Fullstack application with user management and event creation, designed for the gaming community, with a strong focus on accessibility for users with sensory disabilities.",
          "Get In Touch": "Get In Touch",
          "Let's connect and discuss opportunities": "Let's connect and discuss opportunities",
          "Email": "Email",
          "LinkedIn": "LinkedIn",
          "GitHub": "GitHub",
          "WhatsApp": "WhatsApp",
          "My LinkedIn": "My LinkedIn",
          "Click to view my GitHub": "Click to view my GitHub"
        }
      },
      pt: {
        translation: {
          "home": "Início",
          "about": "Sobre",
          "projects": "Projetos",
          "contact": "Contato",
          "welcome": "Bem-vindo",
          "myProjects": "Meus Projetos",
          "sendMessage": "Enviar Mensagem",
          "Hi, I'm Carlos": "Olá, eu sou o Carlos",
          "homeDescription": "Sou um desenvolvedor full-stack com experiência profissional e acadêmica.",
          "View Projects": "Ver Projetos",
          "Contact Me": "Fale Comigo",
          "About Me": "Sobre Mim",
          "DeveloperExperience" : "Desenvolvedor com experiência em desenvolvimento de aplicações web full stack.",
          "TechStack": "Tecnologias",
          "Frontend": "Frontend",
          "Backend": "Backend",
          "No technologies to display": "Nenhuma tecnologia para exibir",
          "Education": "Educação",
          "Bachelor in Computer Science": "Bacharel em Ciência da Computação",
          "Puc Minas University": "Universidade Puc Minas",
          "Graduated in 2024": "Formado em 2024",
          "educationDescription": "Durante minha graduação em Ciência da Computação, adquiri uma base sólida em desenvolvimento de software, algoritmos, estruturas de dados, bancos de dados, redes de computadores e sistemas operacionais. O curso enfatizou resolução de problemas, raciocínio lógico e experiência prática em projetos acadêmicos. Aprendi habilidades fundamentais em linguagens como Java e C, e explorei áreas como desenvolvimento web, IA e segurança da informação. O mais importante foi aprender a focar na solução de problemas, e não em ferramentas específicas.",
          "Certificates & Qualifications": "Certificados & Qualificações",
          "Courses": "Cursos",
          "Workshops": "Oficinas",
          "Work Experience": "Experiência Profissional",
          "Trainee": "Estagiário",
          "Junior": "Júnior",
          "Additional responsibilities included:": "Responsabilidades adicionais incluíram:",
          "Data analysis and organization in SAP.": "Análise e organização de dados no SAP.",
          "Administrative support using Excel.": "Suporte administrativo utilizando Excel.",
          "Development and maintenance of legacy systems using JavaScript and jQuery on the TOTVS Fluig enterprise management platform. I worked with a focus on BPM (Business Process Management), modeling, automating, and managing business processes, as well as ECM (Enterprise Content Management), handling document management, version control, and approval workflows.": "Desenvolvimento e manutenção de sistemas legados usando JavaScript e jQuery na plataforma TOTVS Fluig. Atuei com foco em BPM (Gestão de Processos de Negócio), modelagem, automação e gestão de processos, além de ECM (Gestão de Conteúdo Empresarial), lidando com documentos, controle de versões e fluxos de aprovação.",
          "Key Tasks: Development of customized forms Creation and maintenance of workflows (approval flows) Report generation using BIRT Data manipulation with Oracle SQL, including specific queries to populate Excel-based dashboards": "Principais tarefas: Desenvolvimento de formulários personalizados, criação e manutenção de workflows (fluxos de aprovação), geração de relatórios com BIRT, manipulação de dados com Oracle SQL, incluindo consultas específicas para dashboards em Excel.",
          "Data manipulation using Oracle SQL, including specific queries to populate Excel-based dashboards.": "Manipulação de dados com Oracle SQL, incluindo consultas específicas para alimentar dashboards em Excel.",
          "Technical support and troubleshooting for network-related issues": "Suporte técnico e resolução de problemas de rede",
          "Network inspection and identification of physical faults": "Inspeção de rede e identificação de falhas físicas",
          "CurimbabaDescription": "Desenvolvimento e manutenção de sistemas legados usando JavaScript e jQuery na plataforma TOTVS Fluig. Atuei com foco em BPM (Gestão de Processos de Negócio), modelagem, automação e gestão de processos, além de ECM (Gestão de Conteúdo Empresarial), lidando com documentos, controle de versões e fluxos de aprovação.",
          "CurimbabaKeyTasks": "Principais tarefas: Desenvolvimento de formulários personalizados, criação e manutenção de workflows (fluxos de aprovação), geração de relatórios com BIRT, manipulação de dados com Oracle SQL, incluindo consultas específicas para dashboards em Excel.",
          "CurimbabaDataManipulation": "Manipulação de dados com Oracle SQL, incluindo consultas específicas para alimentar dashboards em Excel.",
          "TelemidiaSupport": "Suporte técnico e resolução de problemas de rede",
          "TelemidiaInspection": "Inspeção de rede e identificação de falhas físicas",
          "Featured Projects": "Projetos em Destaque",
          "Technologies Used:": "Tecnologias Utilizadas:",
          "View Project →": "Ver Projeto →",
          "Account Creation": "Criação de Conta",
          "Create a New Event": "Criar Novo Evento",
          "Profile Editing": "Edição de Perfil",
          "Event Dashboard": "Painel de Eventos",
          "Event Editing": "Edição de Evento",
          "V-LIBRAS Working": "V-LIBRAS Funcionando",
          "Fullstack application with user management and event creation, designed for the gaming community, with a strong focus on accessibility for users with sensory disabilities.": "Aplicação fullstack com gerenciamento de usuários e criação de eventos, projetada para a comunidade gamer, com forte foco em acessibilidade para pessoas com deficiência sensorial.",
          "Get In Touch": "Entre em Contato",
          "Let's connect and discuss opportunities": "Vamos conversar e discutir oportunidades",
          "Email": "Email",
          "LinkedIn": "LinkedIn",
          "GitHub": "GitHub",
          "WhatsApp": "WhatsApp",
          "My LinkedIn": "Meu LinkedIn",
          "Click to view my GitHub": "Clique para ver meu GitHub"
        }
      }
    },
    lng: "en", // idioma padrão
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // não é necessário para React
    }
  });

export default i18n;