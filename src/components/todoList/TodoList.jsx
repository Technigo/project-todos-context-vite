import { useAppData } from "../../contexts/FormContext";
import { EmptyList } from "../EmptyList";
import { TodoListForm } from "./TodoListForm";
import "./todoList.css";

export const TodoList = () => {
  const { todos, removeTask, toggleTodo, clearAllTask } = useAppData();

  const handleRemoveTask = (taskToRemove) => {
    removeTask(taskToRemove);
  };

  const handleToggle = (index, completed) => {
    toggleTodo(index, !completed);
  };

  const handleClearAll = (index) => {
    clearAllTask(index);
    confirm("Are you sure?");
  };

  const completedTaskAmount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-list-container">
      {todos.length > 0 ? (
        <>
          
           

       
          <ul style={{ listStyle: "none" }} className="todo">
            {todos.map((todo, index) => (
              <TodoListForm
                keyword={index}
                type={"checkbox"}
                checked={todo.completed}
                onChange={() => handleToggle(index, todo.completed)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                todo={todo.text}
                onClick={() => handleRemoveTask(todo)}
              />
            ))}
          </ul>
          <h4 className="completeAmount">
              Completed tasks {completedTaskAmount}/{todos.length}
            </h4>
        
     
            {/* <button onClick={handleClearAll}>Clean all</button> */}
       
       
        </>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};
