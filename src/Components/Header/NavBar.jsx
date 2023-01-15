import "./index.css";
import Logo from "../../assets/Logo_icon.svg";
import Facebook from "../../assets/logo-facebook.svg";
import Whatsapp from "../../assets/logo-whatsapp.svg";
import Instagram from "../../assets/logo-instagram.svg";
import Menu from "../../assets/menu-outline.svg";

const NavBar = () => {
  return (
    <div className="navbar_container">
      <div className="logo_container">
        <img src={Logo} alt="log" width={40} />
        <h3>Adiex</h3>
      </div>
      <div className="middle_list">
        <a href="#about" className="link1">
          about us
        </a>
        <a href="#services">services</a>
        <a href="#prices">prices</a>
        <a href="#reviews">reviews</a>
        <a href="#contact">contact</a>
      </div>
      <div className="icons_container">
        <img src={Whatsapp} alt="what's app icon link" width={32} />
        <img src={Instagram} alt="instagram icon link" width={32} />
        <img src={Facebook} alt="facebook icon link" width={32} />
      </div>
      <div className="menu_list">
        <img src={Menu} alt="log" width={40} />
      </div>
    </div>
  );
};

export default NavBar;
