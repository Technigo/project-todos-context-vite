import { createContext, useState, useContext, useEffect } from "react";

const AppDataContext = createContext()

export const AppDataProvider = ({children}) => {
    // const [taskCount, setTaskCount] = useState(0)
    // const [newTask, setNewTask] = useState('') //new task needs to be filled
    const [todos, setTodos] = useState([{text: 'Laundry', completed: false}]) //todo list

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

    const appContent = {
      title: "My todo list",
      heading: "New task",
    };
    
    return (
      <AppDataContext.Provider
        value={{ todos, addTask, appContent, removeTask, toggleTodo}}
      >
        {children}
      </AppDataContext.Provider>
    );
}

export const useAppData = () => useContext(AppDataContext)


// export const AppDataProvider = ({children}) => {
//     const [list, setList] = useState ([])
//     const [todos, setTodos] = useState([])
//     const [listItems, setListItem] = useState(0)

//     const addToList = (task) => {
//         const existTaskIndex = list.findIndex((item) => item.id === task.id)

//         if(existTaskIndex !== -1) {
//             const updateTodo = [...list]
//             updateTodo[existTaskIndex] = {
//                 ...updateTodo[existTaskIndex],
//                 quantity: updateTodo[existTaskIndex].quantity+1
//             }
//             setList(updateTodo)
//         }else {
//             setList([...list, {...task, quantity:1}])
//         }
//         setListItem(listItems+1)
//     }

//     const removeTodo = (taskId) => {
//         const updatedListItems = todos.map(item=>
//             item.id === taskId ? {...item, quantity: item.quantity -1} : item.filter(item=>item.quantity>0))
//              setTodos(updatedListItems)
//     }

//     const appContent = {
//         title: 'My todo list',
//         heading: 'New task'
//     }

//     return (
//         <AppDataContext.Provider value={{list, appContent, removeTodo, addToList}}>
//             {children}
//         </AppDataContext.Provider>
//     )
// }

// export const useAppData = () => useContext(AppDataContext)