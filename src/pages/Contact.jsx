import foto from "../assets/camilla_contato.jpeg";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-shell">
        <div className="contact-top">
          <div className="contact-heading">
            <span className="contact-kicker">Contato</span>
            <h1>
              Vamos criar algo
              <br />
              bonito, funcional
              <br />
              e memorável.
            </h1>
          </div>

          <div className="contact-copy">
            <p>
              Se você tem uma ideia, projeto ou oportunidade, me chama. Gosto
              de transformar conceitos em interfaces modernas, elegantes e bem
              construídas.
            </p>

            <div className="contact-mini-links">
              <a
                href="https://www.linkedin.com/in/camillaestevaolodi"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/CamillaEstevao"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="mailto:camilla.desenvolvedora@gmail.com">
                camilla.desenvolvedora@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="contact-main">
          <div className="contact-portrait">
            <div className="contact-portrait-bg"></div>
            <img src={foto} alt="Camilla" />
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form-header">
              <span className="contact-form-label">Escreva sua mensagem</span>
              <p>
                Preencha os campos abaixo. Depois, se quiser, eu também posso te
                ajudar a fazer esse formulário enviar mensagens de verdade.
              </p>
            </div>

            <div className="field-grid">
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input id="nome" type="text" placeholder="Seu nome" />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="seuemail@gmail.com" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="assunto">Assunto</label>
              <input id="assunto" type="text" placeholder="Sobre o que você quer falar?" />
            </div>

            <div className="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                rows="6"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>

            <div className="contact-actions">
              <button type="submit">Enviar mensagem</button>
              <span>Resposta por email ou LinkedIn.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;