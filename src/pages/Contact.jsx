import foto from "../assets/camilla_contato.jpeg";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-wrapper">

        {/* TEXTO */}
        <div className="contact-left">
          <span className="contact-tag">Contato</span>

          <h1>
            Vamos construir algo <br />
            com propósito.
          </h1>

          <p>
            Se você tem uma ideia, projeto ou oportunidade, me chama.
            Gosto de transformar conceitos em interfaces modernas,
            funcionais e bonitas.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Seu nome" />
            <input type="email" placeholder="Seu email" />
            <textarea placeholder="Sua mensagem..." rows="5" />

            <button>Enviar mensagem</button>
          </form>

          <div className="contact-links">
            <a href="https://www.linkedin.com/in/camillaestevaolodi" target="_blank">
              LinkedIn
            </a>

            <a href="https://github.com/CamillaEstevao" target="_blank">
              GitHub
            </a>

            <a href="mailto:camilla.desenvolvedora@gmail.com">
              Email
            </a>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="contact-right">
          <img src={foto} alt="Camilla" />
        </div>

      </div>

    </section>
  );
}

export default Contact;