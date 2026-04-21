function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <span className="about-eyebrow">Sobre mim</span>
        <h1>
          Transformo ideias em interfaces modernas, funcionais e com identidade.
        </h1>
        <p className="about-intro">
          Sou Camilla Estevão, desenvolvedora front-end focada em criar
          experiências visuais limpas, elegantes e intuitivas. Gosto de unir
          organização, estética e código para construir páginas que não só
          funcionam bem, mas também causam uma boa primeira impressão.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card about-card-highlight">
          <span className="about-card-label">Minha visão</span>
          <h2>Código com estética e propósito</h2>
          <p>
            Para mim, front-end não é só fazer a tela aparecer. É estruturar bem,
            pensar na experiência de quem usa, cuidar da hierarquia visual e
            criar algo agradável, responsivo e profissional.
          </p>
        </article>

        <article className="about-card">
          <span className="about-card-label">Formação</span>
          <h3>Análise e Desenvolvimento de Sistemas</h3>
          <p>
            Minha base técnica vem da formação em ADS, que fortaleceu meu olhar
            para lógica, estrutura, organização e resolução de problemas.
          </p>
        </article>

        <article className="about-card">
          <span className="about-card-label">Foco atual</span>
          <h3>Front-end com React</h3>
          <p>
            Estou aprofundando meus projetos com React, JavaScript, HTML e CSS,
            buscando criar interfaces modernas, componentizadas e bem pensadas.
          </p>
        </article>

        <article className="about-card">
          <span className="about-card-label">Diferencial</span>
          <h3>Visão prática e estratégica</h3>
          <p>
            Além do lado técnico, também tenho vivência com vendas online e
            experiência real com apresentação visual, usabilidade e conversão.
          </p>
        </article>
      </div>

      <div className="about-stack-section">
        <div className="about-stack-text">
          <span className="about-eyebrow">Stack & habilidades</span>
          <h2>Tecnologias e pontos fortes</h2>
          <p>
            Busco construir projetos com base sólida, visual refinado e atenção
            aos detalhes que fazem diferença.
          </p>
        </div>

        <div className="about-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>UI Design</span>
          <span>Responsividade</span>
          <span>Componentização</span>
          <span>UX Thinking</span>
        </div>
      </div>

      <div className="about-timeline">
        <div className="about-timeline-text">
          <span className="about-eyebrow">Minha jornada</span>
          <h2>Como penso meu crescimento</h2>
        </div>

        <div className="timeline-list">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Base técnica</h3>
              <p>
                Construção da minha base em desenvolvimento com foco em lógica,
                estrutura e fundamentos de tecnologia.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Interesse por interfaces</h3>
              <p>
                Evolução do interesse por páginas bonitas, bem organizadas e com
                boa experiência visual.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Projetos práticos</h3>
              <p>
                Desenvolvimento de portfólio e páginas reais para ganhar prática,
                repertório e confiança.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Próximo passo</h3>
              <p>
                Crescer como front-end, participar de projetos profissionais e
                transformar estudo em carreira sólida.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <span className="about-eyebrow">Objetivo</span>
        <h2>Quero construir projetos cada vez mais profissionais e relevantes.</h2>
        <p>
          Estou em constante evolução e aberta a oportunidades para aprender,
          colaborar e transformar boas ideias em experiências digitais de alto nível.
        </p>
      </div>
    </section>
  );
}

export default About;