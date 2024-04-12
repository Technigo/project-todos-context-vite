import RemoveIcon from "../assets/RemoveIcon.svg"
import "./RemoveButton.css"

export const RemoveButton = () =>{
  return(
    <button className="btncontainer">
        <img className="trash-icon" src={RemoveIcon} alt="remove-icon"/>
    </button>
  )
}