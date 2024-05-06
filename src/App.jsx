import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoProvider } from './context/TodoContext';
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/icons/Switch";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <TodoProvider>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <SunIcon style={{ marginRight: '10px'}} />
        <Switch isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
        <MoonIcon style={{ marginLeft: '10px' }} />
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;


