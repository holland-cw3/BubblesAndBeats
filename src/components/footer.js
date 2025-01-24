import "../CSS/header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div class="footer">
      <div class="footer-content">
        <a href="mailto:hollandcw3@gmail.com">© 2025 Caleb Holland</a>
        <div class="logos">
          <a href="https://github.com/holland-cw3">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/caleb-w-holland//" class="ico">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
