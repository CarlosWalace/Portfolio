import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: t("Email"),
      value: "carloswalace1210@gmail.com",
      link: "mailto:carloswalace1210@gmail.com",
      iconColor: "text-red-500 group-hover:text-red-400"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: t("LinkedIn"),
      value: t("My LinkedIn"),
      link: "https://www.linkedin.com/in/carlos-walace-cordeiro-rodrigues-9b706020b",
      iconColor: "text-blue-600 group-hover:text-blue-500"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: t("GitHub"),
      value: t("Click to view my GitHub"),
      link: "https://github.com/CarlosWalace",
      iconColor: "text-gray-300 group-hover:text-white"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: t("WhatsApp"),
      value: "55 35 987083996",
      link: "https://wa.me/5535987083996",
      iconColor: "text-teal-400 group-hover:text-teal-300"
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">
            {t("Get In Touch")}
          </h2>

          <p className="text-gray-300 mb-12 text-lg">
            {t("Let's connect and discuss opportunities")}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-xl border border-purple-500 hover:-translate-y-1 hover:border-purple-300 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className={`${contact.iconColor} transition-colors`}>
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
