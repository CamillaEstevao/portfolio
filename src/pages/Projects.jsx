function Projects() {
  return (
    <section className="projects-page">
      <div className="projects-hero">
        <span className="projects-eyebrow">Projetos</span>
        <h1>Alguns trabalhos e ideias que mostram meu estilo de construção.</h1>
        <p className="projects-intro">
          Aqui estão projetos que representam meu foco em front-end, interface,
          organização visual e experiência do usuário. A ideia é mostrar não só
          o resultado, mas também a forma como penso estrutura, estética e
          funcionalidade.
        </p>
      </div>

      <div className="projects-grid">
        <article className="project-card project-card-featured">
          <div className="project-card-top">
            <span className="project-type">Projeto em destaque</span>
            <span className="project-year">2026</span>
          </div>

          <h2>Portfólio Pessoal</h2>
          <p>
            Desenvolvimento do meu próprio portfólio com foco em identidade
            visual, navegação limpa, estrutura moderna e apresentação
            profissional.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>UI</span>
          </div>

          <div className="project-actions">
            <a href="#">Ver projeto</a>
            <a href="#">Código</a>
          </div>
        </article>

        <article className="project-card">
          <div className="project-card-top">
            <span className="project-type">Landing Page</span>
            <span className="project-year">2026</span>
          </div>

          <h3>Página de apresentação moderna</h3>
          <p>
            Conceito de landing page com foco em hierarquia visual, seções bem
            organizadas e design limpo.
          </p>

          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>Responsivo</span>
          </div>
        </article>

        <article className="project-card">
          <div className="project-card-top">
            <span className="project-type">UI Concept</span>
            <span className="project-year">2026</span>
          </div>

          <h3>Painel visual / dashboard</h3>
          <p>
            Estudo de interface com foco em blocos organizados, leitura clara de
            informação e composição visual elegante.
          </p>

          <div className="project-tags">
            <span>Dashboard</span>
            <span>Cards</span>
            <span>UX</span>
          </div>
        </article>

        <article className="project-card">
          <div className="project-card-top">
            <span className="project-type">Projeto prático</span>
            <span className="project-year">2026</span>
          </div>

          <h3>Página institucional responsiva</h3>
          <p>
            Estruturação de página com foco em conteúdo bem distribuído,
            navegação intuitiva e experiência consistente em diferentes telas.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>Layout</span>
            <span>Mobile</span>
          </div>
        </article>
      </div>

      <div className="projects-cta">
        <span className="projects-eyebrow">Próximos passos</span>
        <h2>Quero transformar estudo e prática em projetos cada vez mais reais.</h2>
        <p>
          Essa área vai crescer com novos cases, páginas e aplicações. A ideia é
          construir um portfólio que mostre evolução constante, qualidade visual
          e consistência técnica.
        </p>
      </div>
    </section>
  );
}

export default Projects;