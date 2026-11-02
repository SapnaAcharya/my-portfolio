import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {

  return (
    <footer className="footer">

      <div className="container footer-content">

        <div>
          <a href="#home" className="footer-logo">
            Sapana<span>.</span>
          </a>

          <p>
            Junior Software Developer
            <br />
            Building practical software solutions.
          </p>
        </div>

        <div className="footer-socials">

          <a
            href="https://github.com/SapnaAcharya"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/sapna-acharya12/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a href="#home" aria-label="Back to top">
            <ArrowUp />
          </a>

        </div>

      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} Sapana Acharya.
        All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;