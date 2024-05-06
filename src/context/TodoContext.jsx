import React, { createContext, useContext, useReducer } from "react";
import moment from "moment";

const initialState = {
  tasks: [
    { id: 1, text: "Complete project", done: false, timestamp: moment() },
    { id: 2, text: "Walk the dog", done: true, timestamp: moment() },
    { id: 3, text: "Order groceries", done: false, timestamp: moment() },
    { id: 4, text: "Dentist", done: false, timestamp: moment() },
    { id: 5, text: "Water flowers", done: false, timestamp: moment() },
    { id: 6, text: "Start Laundry", done: false, timestamp: moment() },
    { id: 7, text: "Design work Template", done: false, timestamp: moment() }
  ]
};

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleToggleAll = () => {
    dispatch({ type: 'TOGGLE_ALL_TASKS' });
  };

  return (
    <TodoContext.Provider value={{ state, dispatch, handleToggleAll }}>
      {children}
    </TodoContext.Provider>
  );
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload, timestamp: moment() }]
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        )
      };
    case 'TOGGLE_ALL_TASKS':
      const allDone = state.tasks.every(task => task.done);
      return {
        ...state,
        tasks: state.tasks.map(task => ({ ...task, done: !allDone }))
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};
