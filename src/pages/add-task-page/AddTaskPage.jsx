import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppData } from "../../context/AppContext";
import "./AddTaskPage.css";

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
  const { addTask, completeTask, darkTheme } = useAppData();
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
    <section
      className={`task-page ${darkTheme ? `light-theme` : `dark-theme`}`}
    >
      <Link
        className={`home-btn ${darkTheme ? `light-theme` : `dark-theme`}`}
        to="/"
      >
        <svg
          className="home-btn-icon"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
            clipRule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
      <div
        className={`add-form-container ${
          darkTheme ? `light-theme` : `dark-theme`
        }`}
      >
        <h3 className="add-form-title">Add New Task</h3>
        <form className="add-task-form" onSubmit={handleSubmit}>
          <label className="task-description-label" htmlFor="task-description">
            Description
            <textarea
              className="task-description-input"
              id="task-description"
              name="task-description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
            />
          </label>
          <label className="task-date-label" htmlFor="task-date">
            Date
            <input
              className="task-date-input"
              type="date"
              id="task-date"
              name="task-date"
              min={today}
              value={taskDate}
              onChange={handleDateChange}
              required
            />
          </label>

          <button
            className={`add-form-btn ${
              darkTheme ? `light-theme` : `dark-theme`
            }`}
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
};
