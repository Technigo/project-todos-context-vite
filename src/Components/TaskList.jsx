import { useEffect, useState } from 'react'
import { useToDoContext } from '../Contexts/TodoContext'
import moment from 'moment'
import '../Styles/Task.css'
export const TaskList = () => {
  const { taskList } = useToDoContext()
  const now = moment().format('MMM Do YY')

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
                  <h5>{moment(item.startDate).format('h:mm a')}</h5>
                </div>
              </div>
            </label>
          </div>
        ))}
    </>
  )
}
