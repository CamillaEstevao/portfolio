function Header() {
  return (
    <header className="header">
      <div className="logo">Camilla Estevão</div>

      <nav className="nav">
        <a href="#about">Sobre</a>
        <a href="#learn">Habilidades</a>
        <a href="#portfolio">Projetos</a>
        <a
          href="https://www.linkedin.com/in/camillaestevaolodi"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a href="#contact">Contato</a>
      </nav>

      <div className="socials">
        <a href="#">tw</a>
        <a href="#">in</a>
        <a href="#">fb</a>
        <a href="#">ig</a>
      </div>
    </header>
  );
}

export default Header;