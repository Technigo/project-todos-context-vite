import RemoveIcon from "../assets/RemoveIcon.svg";
import "./RemoveButton.css";

export const RemoveButton = ({ onClick, ariaLabel }) => {
  return (
    <button className="btncontainer" onClick={onClick} aria-label={ariaLabel}>
      <img className="trash-icon" src={RemoveIcon} alt="remove-icon" />
    </button>
  );
};
