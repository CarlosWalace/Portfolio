import { RevealOnScroll } from "../RevealOnScroll";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "carloswalace1210@gmail.com",
      link: "mailto:seu.carloswalace1210@gmail.com"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "My LinkedIn",
      link: "https://www.linkedin.com/in/carlos-walace-cordeiro-rodrigues-9b706020b"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      value: "Click to view my GitHub",
      link: "https://github.com/CarlosWalace"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: "WhatsApp",
      value: "55 35 987083996",
      link: "https://wa.me/55 35 987083996"
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="text-gray-300 mb-12 text-lg">
            Let's connect and discuss opportunities
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    {contact.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium">{contact.label}</h3>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
