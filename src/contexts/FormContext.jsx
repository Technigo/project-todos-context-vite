import { createContext, useState, useContext, useEffect } from "react";

const AppDataContext = createContext()

export const AppDataProvider = ({children}) => {
    // const [taskCount, setTaskCount] = useState(0)
    // const [newTask, setNewTask] = useState('') //new task needs to be filled
    const [todos, setTodos] = useState([
      {text: 'Laundry 🧺', completed: false},
      {text: 'Cook 👩‍🍳', completed: false},
      {text: 'Gym 🏋️‍♀️', completed: false}
    ]) //todo list

    // const taskAmounts = () => setTaskCount((taskCount) => taskCount + 1) //all the tasks number

    useEffect(() =>{
      const storedTodos = localStorage.getItem('todos')
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos))
      }
    }, [])

    useEffect(()=> {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTask = (todo) => {
      setTodos([...todos, {text: todo, completed: false}])
    } //add new task to todo list

    const removeTask = (taskToRemove) => {
      setTodos(todos.filter((task)=> task.text !== taskToRemove.text))
    } //setTodoList for its' value -- todoList, when the task is !== the task to be removed, which means these tasks I will keep in the todo list

    const toggleTodo = (index, completed) =>{
      const updatedTodo = [...todos]
      updatedTodo[index].completed = completed
      setTodos(updatedTodo)
    }

    // const completedTask = (index, completed) => {
    //   const updatedCompletedTask = [...todos]
    //   updatedCompletedTask[index].completed = true
    //   setTodos(updatedCompletedTask)
    // }

    // const completedTask = (index, completed) => {
    //   const updatedCompletedTask = [...todos]
    //   updatedCompletedTask[index].completed = completed
    //   setTodos(updatedCompletedTask)
    // }

  //  const uncompletedTask = (index, completed) => {
  //    const updatedUncompletedTask = [...todos]
  //  updatedUncompletedTask[index].completed = !completed
  //    setTodos(updatedUncompletedTask)
  //    }
    const clearAllTask = () => {
      setTodos([])
    }

    const appContent = {
      title: "My todo list",
      heading: "New task",
    };
    
    return (
      <AppDataContext.Provider
        value={{ todos, addTask, appContent, 
          removeTask, toggleTodo,clearAllTask
       }}
      >
        {children}
      </AppDataContext.Provider>
    );
}

export const useAppData = () => useContext(AppDataContext)


