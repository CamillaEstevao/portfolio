const projects = [
  {
    id: 1,
    type: "Projeto em destaque",
    year: "2026",
    title: "Portfólio Pessoal",
    description:
      "Meu portfólio desenvolvido com foco em identidade visual, navegação limpa e apresentação profissional dos meus projetos e habilidades.",
    tags: ["React", "JavaScript", "CSS", "UI"],
    demo: "https://seu-link-demo.com",
    github: "https://github.com/seuusuario/seu-repositorio",
    featured: true,
  },
  {
    id: 2,
    type: "Landing Page",
    year: "2026",
    title: "Página de apresentação moderna",
    description:
      "Conceito de landing page com foco em hierarquia visual, seções organizadas e design responsivo.",
    tags: ["HTML", "CSS", "Responsivo"],
    demo: "https://seu-link-demo.com",
    github: "https://github.com/seuusuario/seu-repositorio",
  },
  {
    id: 3,
    type: "UI Concept",
    year: "2026",
    title: "Dashboard visual",
    description:
      "Estudo de interface com cards, métricas e organização visual para leitura clara e elegante.",
    tags: ["Dashboard", "Cards", "UX"],
    demo: "https://seu-link-demo.com",
    github: "https://github.com/seuusuario/seu-repositorio",
  },
  {
    id: 4,
    type: "Projeto prático",
    year: "2026",
    title: "Página institucional responsiva",
    description:
      "Estruturação de página com foco em navegação intuitiva, conteúdo bem distribuído e experiência consistente.",
    tags: ["React", "Layout", "Mobile"],
    demo: "https://seu-link-demo.com",
    github: "https://github.com/seuusuario/seu-repositorio",
  },
];

function Projects() {
  return (
    <section className="projects-page">
      <div className="projects-hero">
        <span className="projects-eyebrow">Projetos</span>
        <h1>Projetos que mostram meu estilo visual, organização e forma de construir interfaces.</h1>
        <p className="projects-intro">
          Aqui estão alguns projetos e conceitos que representam meu foco em
          front-end, experiência do usuário e apresentação visual profissional.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project-card ${project.featured ? "project-card-featured" : ""}`}
          >
            <div className="project-card-top">
              <span className="project-type">{project.type}</span>
              <span className="project-year">{project.year}</span>
            </div>

            <div className="project-image">
              <div className="project-image-screen">
                <div className="project-image-topbar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="project-image-content">
                  <div className="mock-block mock-block-lg"></div>
                  <div className="mock-row">
                    <div className="mock-block"></div>
                    <div className="mock-block"></div>
                  </div>
                  <div className="mock-row">
                    <div className="mock-line"></div>
                    <div className="mock-line short"></div>
                  </div>
                </div>
              </div>
            </div>

            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-actions">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Ver demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-cta">
        <span className="projects-eyebrow">Evolução</span>
        <h2>Quero transformar cada projeto em uma prova real da minha evolução como front-end.</h2>
        <p>
          Essa seção vai crescer com novos trabalhos, aplicações e páginas cada
          vez mais refinadas, mostrando consistência visual, técnica e prática.
        </p>
      </div>
    </section>
  );
}

export default Projects;