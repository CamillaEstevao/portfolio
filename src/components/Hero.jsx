import { useState } from "react";
import perfil from "../assets/perfil.jpg";
import perfilArt from "../assets/perfil-art.jpg";

function Hero() {
  const [mode, setMode] = useState("coder");

  const isDesigner = mode === "designer";
  const isCoder = mode === "coder";

  return (
    <section className="hero">
      <div className="hero-main">
        <div
          className={`hero-side hero-left ${isDesigner ? "active" : "inactive"}`}
          onMouseEnter={() => setMode("designer")}
        >
          <h1>designer</h1>
          <p>
            Crio interfaces modernas, intuitivas e visualmente elegantes,
            focadas na melhor experiência do usuário.
          </p>
        </div>

        <div
          className="hero-image-wrap"
          onMouseLeave={() => setMode("coder")}
        >
          <img
            src={perfil}
            alt="Camilla"
            className={`hero-image hero-image-normal ${isCoder ? "show" : "hide"}`}
            draggable="false"
          />

          <img
            src={perfilArt}
            alt="Camilla artística"
            className={`hero-image hero-image-art ${isDesigner ? "show" : "hide"}`}
            draggable="false"
          />

          <div className={`code-overlay ${isCoder ? "visible" : ""}`}>
            <span>&lt;html&gt;</span>
            <span>height: 184px;</span>
            <span>CSS3 HTML5</span>
            <span>color: #000;</span>
            <span>jQuery</span>
          </div>

          <div className={`paint-overlay ${isDesigner ? "visible" : ""}`}>
            <span className="paint paint-1"></span>
            <span className="paint paint-2"></span>
            <span className="paint paint-3"></span>
          </div>
        </div>

        <div
          className={`hero-side hero-right ${isCoder ? "active" : "inactive"}`}
          onMouseEnter={() => setMode("coder")}
        >
          <h1>{"<coder>"}</h1>
          <p>
            Desenvolvo aplicações front-end com código limpo, responsivo e
            focado em performance.
          </p>
        </div>
      </div>

      <div className="hero-footer">
        <span></span>
        <p>SOME OF MY LATEST WORK</p>
        <span></span>
      </div>
    </section>
  );
}

export default Hero;