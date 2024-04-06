import "./form.css";

export const Form = () => {
  return (
    <div className="form-container">
      <h2>Add new task</h2>
      <p>Use this form to add a new task to the list</p>
      <form className="todo-form">
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};
