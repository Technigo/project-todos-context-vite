import React from "react";
import { TodoProvider } from "./context/TodoContext";
import { Header } from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Footer } from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <Header />
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
    </TodoProvider>
  );
};

export default App;
