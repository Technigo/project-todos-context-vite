import { createContext, useState, useContext } from "react";

const AppDataContext = createContext()

export const AppDataProvider = ({children}) => {
    // const [taskCount, setTaskCount] = useState(0)
    // const [newTask, setNewTask] = useState('') //new task needs to be filled
    const [taskListItems, setTaskListItems] = useState([]) //todo list

    // const taskAmounts = () => setTaskCount((taskCount) => taskCount + 1) //all the tasks number

    const addTask = (newTask) => {
        setTaskListItems((pre) => [...pre, newTask])
    }

    const appContent = {
      title: "My todo list",
      heading: "New task",
    };
    
    return (
      <AppDataContext.Provider
        value={{ taskListItems, addTask, appContent}}
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