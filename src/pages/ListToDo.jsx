// import React from "react";
// import { useToDos } from "../contexts/ToDoContext";
// import { Button } from "../components/Button";
// import { Link } from "react-router-dom";

// import "./ListToDo.css";

// export const ListToDo = () => {
//   const { todos, toggleToDo } = useToDos();

//   // Group todos by category
//   const todosByCategory = todos.reduce((acc, todo) => {
//     acc[todo.category] = acc[todo.category] || [];
//     acc[todo.category].push(todo);
//     return acc;
//   }, {});

//   return (
//     <section className="add-section">
//       <Link to="/" className="todo-link">
//         <p>🔙</p>
//       </Link>
//       <div className="add-title">
//         <h2>All</h2>
//       </div>

//       <div className="add-container">
//         {/* Map over categories */}
//         {Object.keys(todosByCategory).map((category, index) => (
//           <div key={index}>
//             <h3>{category}</h3>
//             {/* Map over todos within each category */}
//             {todosByCategory[category].map((todo, index) => (
//               <div key={index}>
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => {
//                     toggleToDo(index);
//                   }}
//                 />
//                 <label>{todo.text}</label>
//                 <span> - {todo.date}</span>
//                 <span className="category-tag"> - {todo.category}</span>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className="list-btn">
//         <Link to="/todo/:add_todo">
//           <Button />
//         </Link>
//       </div>
//     </section>
//   );
// };

import React from "react";
import { useToDos } from "../contexts/ToDoContext";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

import "./ListToDo.css";

export const ListToDo = () => {
  //useToDos from ToDoContext provides "todos" to access the list of tasks and toggleToDo for marking tasks complete
  const { todos, toggleToDo, deleteToDo } = useToDos();
  const handleDelete = (index) => {
    deleteToDo(index);
  };

  return (
    <section className="add-section">
      {/* <Link to="/" className="todo-link">
        <p>🔙</p>
      </Link> */}

      <div className="add-title">
        <h2>Your to-do list</h2>
      </div>
      <div className="add-container">
        {todos.map((todo, index) => (
          <div key={index} className="task-wrapper">
            <div className="task-content">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  toggleToDo(index);
                }}
              />
              <label className={todo.completed ? "completed" : ""}>
                <div className="task-details">
                  <div className="task-category">{todo.category}:</div>
                  <div className="task-text">{todo.text}</div>
                  <div className="task-date">Deadline: {todo.date}</div>
                </div>
              </label>
            </div>
            <div className="btn-delete">
              <button
                className="task-delete"
                onClick={() => {
                  deleteToDo(index);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="list-btn">
        <Link to="/todo/:add_todo">
          <Button />
        </Link>
      </div>
    </section>
  );
};
