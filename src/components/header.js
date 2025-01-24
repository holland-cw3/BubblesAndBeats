import "../CSS/header.css";
import logo from '../images/bab2.png'

export default function Header() {
  return (
    <div class="header">
        <img src={logo} alt='logo' class='logo'></img>
    </div>
  );
}
