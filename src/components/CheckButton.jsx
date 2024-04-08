import "./CheckButton.css"

export const CheckButton = ({ name }) => {

    return (
      <form>
        <input type="checkbox" id={name} name="task-check"></input>
        <label htmlFor={name}>{name}</label>
      </form>
    );
}