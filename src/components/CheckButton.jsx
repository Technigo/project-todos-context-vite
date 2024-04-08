import "./CheckButton.css";

export const CheckButton = ({ name }) => {
  const clicked = () => {
    console.log(name);
  };

  return (
    <form>
      <input
        type="checkbox"
        id={name}
        name="task-check"
        onChange={clicked}
      ></input>
      <label htmlFor={name}>{name}</label>
    </form>
  );
};
