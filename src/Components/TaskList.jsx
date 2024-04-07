import { useEffect, useState } from "react"
import { useToDoContext } from "../Contexts/TodoContext"
import "../Styles/Task.css"
export const TaskList = () => {
  const { taskList } = useToDoContext()

  return (
    <>
      {taskList &&
        taskList.map((item) => (
          <div key={item.id} className="taskItem">
            <input
              id={`checkbox-${item.id}`}
              className="checkboxInput"
              type="checkbox"
              value={item.content}
              // onChange={handleCheckboxChange}
            />
            <label
              htmlFor={`checkbox-${item.id}`}
              className="customRadioCheckbox"
            >
              <div className="customCheckboxContent">
                <button className="deleteBtn">x</button>
                <h2>{item.content}</h2>
                <div className="checkboxDatesContainer">
                  <h5>Created:{item.createdAt}</h5>
                  <h5>Due:{item.dueDate}</h5>
                </div>
              </div>
            </label>
          </div>
        ))}
    </>
  )
}
