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
  const { todos, toggleToDo } = useToDos();

  return (
    <section className="add-section">
      <Link to="/" className="todo-link">
        <p>🔙</p>
      </Link>

      <div className="add-title">
        <h2>All</h2>
      </div>
      <div className="add-container">
        {todos.map((todo, index) => (
          <div key={index} className="task-wrapper">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleToDo(index);
              }}
            />
            <label
              className={`text-wrapper ${todo.completed ? "completed" : ""}`}
            >
              <div className="task-text">{todo.text}</div>
              <div className="task-date">{todo.date}</div>
              {/* <div>{todo.category}</div> */}
            </label>
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
