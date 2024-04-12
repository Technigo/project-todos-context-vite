import backgroundImage from "../assets/cork-texture-big.jpg"
import "./Header.css"

export const Header = () => {
  return (
    <div className="header-container" style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
      <h1>To-Doodle</h1>
    </div>
  )
}
