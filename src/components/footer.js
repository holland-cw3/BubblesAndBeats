import "../CSS/header.css";
import { FaGithub, FaLinkedin, FaStrava } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <div class="footer">
//         <div class="copyright"><a href='mailto:hollandcw3@gmail.com'>© 2025 Caleb Holland</a></div>
//     </div>
//   );
// }

export default function Footer() {
  return (
    <div class="footer">
      <div class="footer-content pt-1">
        <a href="mailto:hollandcw3@gmail.com">© 2025 Caleb Holland</a>
        <div class="logos">
          <a href="https://github.com/holland-cw3">
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/caleb-w-holland//"
            class="ico"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
