import "./Switch.css";

function Switch({ isDarkMode, onToggle }) {
  return (
  <di>
    <label className="toggle-switch">
      <input type="checkbox" checked={isDarkMode} onChange={onToggle} />
      <span className="switch" />
    </label>
  </di>
  );
}

export default Switch;
