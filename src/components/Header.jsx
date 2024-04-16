import "./Header.css";
import thumbtackInLine from "../assets/thumbtack-in-line.png";

export const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h1>To Doodle</h1>
        <img
          src={thumbtackInLine}
          alt="thumbtack"
          className="thumbtack-in-line"
        ></img>
      </div>
    </div>
  );
};
