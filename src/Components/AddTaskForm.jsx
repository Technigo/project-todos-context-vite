import { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'
import '../Styles/form.css'
// import 'react-datetime-picker/dist/DateTimePicker.css'
// import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
// import moment from 'moment'

export const AddTaskForm = () => {
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Task to-do..."
      ></textarea>
      {/* <div>
        <label>
          Start Date:
          <DateTimePicker />
        </label>
      </div>
      <div>
        <label>
          End Date:
          <DateTimePicker />
        </label>
      </div> */}

      <button type="submit">Submit</button>
    </form>
  )
}
