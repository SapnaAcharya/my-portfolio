import {  ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroImg from "../assets/hero.png";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">

        <div className="hero-text">

          <span className="hero-label">
            JUNIOR SOFTWARE DEVELOPER
          </span>

          <h1>
            Hello, I'm <span>Sapana Acharya.</span>
          </h1>

          <h2>
            Building practical and reliable
            software applications.
          </h2>

          <p>
            I am a Software Engineering graduate passionate
            about developing modern web applications using
            React.js, C#, ASP.NET Core and SQL Server.
            I enjoy problem-solving, learning new technologies
            and writing maintainable code.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              Explore My Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/Sapna-Acharya-CV.pdf"
              className="secondary-btn"
              download
            >
              Download CV
              <Download size={18} />
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/SapnaAcharya"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/sapna-acharya12"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

         <div className="hero-image">
            <img src={heroImg} alt="Sapana Acharya" />
        </div> 

      </div>
    </section>
  );
}

export default Hero;