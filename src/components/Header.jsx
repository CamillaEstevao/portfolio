import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">Camilla Estevão</div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/projects">Projetos</Link>
      </nav>
    </header>
  );
}

export default Header;