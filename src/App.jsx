// import { ToDoProvider } from "./contexts/ToDoContext";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AddToDo } from "./pages/AddToDo";
// import { ListToDo } from "./pages/ListToDo";

// export const App = () => {
//   return (
//     <div>
//       <ToDoProvider>
//         <AddToDo />
//         <ListToDo />
//       </ToDoProvider>
//     </div>
//   );
// };

import "./App.css";

import { ToDoProvider } from "./contexts/ToDoContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddToDo } from "./pages/AddToDo";
import { ListToDo } from "./pages/ListToDo";
import { Overview } from "./pages/Overview";

export const App = () => {
  return (
    <ToDoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/todo" element={<ListToDo />} />
          <Route path="/todo/:add_todo" element={<AddToDo />} />
        </Routes>
      </BrowserRouter>
    </ToDoProvider>
  );
};
