import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppData } from "../context/AppContext";

const getMonthName = (monthNumber) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[monthNumber - 1];
};

export const AddTaskPage = () => {
  const { addTask, completeTask } = useAppData();
  const [taskDate, setTaskDate] = useState("");
  const [displayMonth, setDisplayMonth] = useState("");
  const [displayDate, setDisplayDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const navigate = useNavigate();

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const month = getMonthName(selectedDate.getMonth() + 1);
    // Adding 1 because getMonth() returns 0-based index
    const date = selectedDate.getDate();
    const formattedDate = date < 10 ? `0${date}` : date.toString();
    const formattedMonth = `${month} `;

    setTaskDate(event.target.value);
    setDisplayDate(formattedDate);
    setDisplayMonth(formattedMonth);
  };

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (event) => {
    event.preventDefault();

    const addedTask = {
      fullDate: taskDate,
      date: displayDate,
      month: displayMonth,
      description: taskDescription,
      complete: completeTask,
    };

    addTask(addedTask);

    setTaskDate("");
    setDisplayMonth("");
    setDisplayDate("");
    setTaskDescription("");

    setTimeout(() => {
      navigate("/");
    }, 10);
  };

  return (
    <section className="task-page">
      <Link to="/">Back</Link>
      <p>Add New Task</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-description">
          Description
          <input
            type="text"
            id="task-description"
            name="task-description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </label>
        <label htmlFor="task-date">
          Date
          <input
            type="date"
            id="task-date"
            name="task-date"
            min={today}
            value={taskDate}
            onChange={handleDateChange}
          />
        </label>

        <button type="submit">Add +</button>
      </form>
    </section>
  );
};
