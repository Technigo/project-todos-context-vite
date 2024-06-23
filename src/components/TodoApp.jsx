import React, { Suspense } from "react";
const Header = React.lazy(() => import("./Header"));
const TodosLogic = React.lazy(() => import("./TodosLogic"));
const Switch = React.lazy(() => import("./Switch"));
import "../styles/TodoApp.css";

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <TodosLogic />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <Switch />
      </Suspense>
    </div>
  );
};

export default TodoApp;
