function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <span className="contact-eyebrow">Contato</span>
        <h1>Vamos conversar sobre ideias, projetos e oportunidades.</h1>
        <p className="contact-intro">
          Se você quiser falar sobre trabalho, parcerias ou apenas entrar em
          contato, pode me encontrar pelos canais abaixo.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card contact-card-highlight">
          <span className="contact-card-label">Disponível para</span>
          <h2>Projetos, freelas e oportunidades.</h2>
          <p>
            Estou aberta a novas conexões, projetos e experiências que me
            permitam crescer como desenvolvedora front-end e construir trabalhos
            cada vez mais profissionais.
          </p>
        </div>

        <div className="contact-card">
          <span className="contact-card-label">LinkedIn</span>
          <h3>Meu perfil profissional</h3>
          <p>Conecte-se comigo pelo LinkedIn.</p>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/camillaestevaolodi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir LinkedIn
          </a>
        </div>

        <div className="contact-card">
          <span className="contact-card-label">GitHub</span>
          <h3>Meus códigos e projetos</h3>
          <p>Veja meus repositórios e evolução técnica.</p>
          <a
            className="contact-link"
            href="https://github.com/CamillaEstevao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir GitHub
          </a>
        </div>

        <div className="contact-card">
          <span className="contact-card-label">Email</span>
          <h3>Fale comigo por email</h3>
          <p>Para contato direto, propostas e mensagens.</p>
          <a className="contact-link" href="mailto:camilla.desenvolvedora@gmail.com">
            camilla.desenvolvedora@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;