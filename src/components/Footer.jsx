import "./Footer.css";
import image from "../assets/technigo-logo.svg";
import backgroundImage from "../assets/crumbled-white-papper.jpg";

export const Footer = () => {
  return (
    <footer
      className="footer-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <p>2024 by Maria Manuela & Arnau Vidal </p>
      <img src={image} alt="Technigo logo" className="logo" />
    </footer>
  );
};
