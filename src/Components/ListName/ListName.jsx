import { useState } from "react";
import "./ListName.css";

export const ListName = () => {
  // State to store the list name and date
  const [listName, setListName] = useState("Weekly planner");
  const [date, setDate] = useState("");

  // Handler to update the list name
  const handleListNameChange = (event) => {
    setListName(event.target.value);
  };

  // Handler to update the date
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // Function to clear default text when input is clicked
  const clearDefaultText = (stateSetter, defaultText) => {
    if (stateSetter === listName) {
      if (listName === defaultText) {
        setListName("");
      }
    } else if (stateSetter === date) {
      if (date === defaultText) {
        setDate("");
      }
    }
  };

  return (
    <div className="listname-container">
      <div className="input-group">
        <h2>
          <label htmlFor="listName">List name:</label>
          <input
            type="text"
            id="listName"
            value={listName}
            onChange={handleListNameChange}
            onClick={() => clearDefaultText(listName, "Weekly planner")}
          />
        </h2>
      </div>
      <div className="input-group">
        <h2>
          <label htmlFor="date">Date:</label>
          <input
            type="week"
            id="date"
            value={date}
            onChange={handleDateChange}
            onClick={() => clearDefaultText(date, "")}
          />
        </h2>
      </div>
    </div>
  );
};
