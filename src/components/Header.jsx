import "../styling/Header.css";
import Logo from "../assets/5803966_checklist_clipboard_task_todo_icon.png";

const Header = () => {
  return (
    <header className="headerContainer">
      <img src={Logo} alt="logo" className="logo" />
      <h1 className="header">Todo App</h1>
    </header>
  );
};

export default Header;
