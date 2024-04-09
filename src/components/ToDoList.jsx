//1.Complete all button that applies to all the taks
//2. Counting total task display

import { useTask } from "../context/TaskContext";

export const ToDoList = () => {
  const { toDoList } = useTask();

  return (
    <div>
      <ul>
        {toDoList.map((task, id) => (
          <li key={id}> {task} </li>
        ))}
      </ul>
    </div>
  );
};
