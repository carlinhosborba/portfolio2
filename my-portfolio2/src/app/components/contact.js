import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ContactCard } from "./contactcard";

export function Contact() {
  return (
    <section id="contact">
      <div className="container min-h-screen px-6 py-12">
        {/* Título */}
        <div className="flex justify-center mt-8">
          <h1 className="text-4xl sm:text-5xl text-center font-bold text-white">
            <br />
            <br />
            <br />
            FICOU COM DUVIDA?
          </h1>
        </div>

        {/* Subtítulo */}
        <div className="flex justify-center mt-4">
          <p className="text-lg sm:text-xl lg:text-2xl text-center max-w-2xl text-white">
            Escolha uma das formas de contato abaixo que melhor te atender, te aguardo!
          </p>
        </div>

        {/* Cards de contato */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
          <ContactCard
            icon={FaWhatsapp}
            iconColor="text-green-500"
            title="WhatsApp"
            description="Chama no WhatsApp! Retorno o mais breve."
            link="https://wa.me/5581999208186"
            linkLabel="Abrir WhatsApp"
          />
          <ContactCard
            icon={FaInstagram}
            iconColor="text-pink-500"
            title="Instagram"
            description="Siga-me no Instagram, acompanhe as novidades!."
            link="https://instagram.com/carlinhosborba"
            linkLabel="Acessar Instagram"
          />
          <ContactCard
            icon={FaEnvelope}
            iconColor="text-blue-500"
            title="Email"
            description="Me manda sua ideia, dúvida ou sugestão."
            link="mailto:carlinhos.borba@hotmail.com"
            linkLabel="Enviar Email"
          />
        </div>

        {/* Rodapé */}
        <div className="flex justify-center mt-20">
          <p className="text-1xl text-white text-center">
            © 2025 Desenvolvido por Carlos Borba • Todos os direitos reservados
          </p>
        </div>
      </div>
    </section>
  );
}
