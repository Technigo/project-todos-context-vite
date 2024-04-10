import { useState } from "react";

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

  return (
    <div>
      <h2>
        List name:
        <input type="text" value={listName} onChange={handleListNameChange} />
      </h2>
      <h2>
        Date:
        <input type="text" value={date} onChange={handleDateChange} />
      </h2>
    </div>
  );
};
