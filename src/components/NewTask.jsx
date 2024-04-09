//1. Input for writing

import "../style/NewTask.scss";

export const NewTask = () => {
  return (
    <>
      <form className="task-input-box">
        <label htmlFor="new-task">New Task:</label>
        <input type="text" id="new-task" placeholder="walking the dog" />
        <button type="submit">Add to List</button>
      </form>
    </>
  );
};
