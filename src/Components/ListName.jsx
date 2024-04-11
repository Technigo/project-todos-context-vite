import { useState } from "react";
import "./ListName.css";

export const ListName = () => {
  // State to store the list name and date
  const [listName, setListName] = useState("What kind of list is this?");
  const [date, setDate] = useState("Set a date for your plans!");

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
      <h2>
        List name:
        <input
          type="text"
          value={listName}
          onChange={handleListNameChange}
          onClick={() =>
            clearDefaultText(listName, "What kind of list is this?")
          }
        />
      </h2>
      <h2>
        Date:
        <input
          type="text"
          value={date}
          onChange={handleDateChange}
          onClick={() => clearDefaultText(date, "Set a date for your plans!")}
        />
      </h2>
    </div>
  );
};
