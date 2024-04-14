import { useState } from "react";
import "./ReminderBlock.css";

export const ReminderBlock = () => {
  const [reminderText, setReminderText] = useState("");
  const [reminderDateTime, setReminderDateTime] = useState("");
  const [reminderAdded, setReminderAdded] = useState(false); // Track if a reminder is added
  const [reminder, setReminder] = useState(null); // Single reminder object

  const handleAddReminder = () => {
    if (reminderText.trim() !== "" && reminderDateTime.trim() !== "") {
      const newReminder = {
        text: reminderText,
        datetime: reminderDateTime.replace("T", " "), // A "T" was showing for some reason, replaced with space
      };
      setReminder(newReminder); // Replace existing reminder with new one
      setReminderAdded(true); // Set reminder added to true
    }
  };

  const handleClearReminder = () => {
    setReminder(null); // Clear the reminder
    setReminderText(""); // Clear input field
    setReminderDateTime("");
    setReminderAdded(false); // Reset reminder added flag
  };

  // Function to check if the reminder is overdue
  const isOverdue = () => {
    if (!reminder) return false; // If no reminder, it's not overdue
    const now = new Date();
    const due = new Date(reminder.datetime);
    return now > due; // If current time is greater than due time, it's overdue
  };

  // Handler for reminder text input
  const handleReminderTextChange = (e) => {
    // Limit the input to maximum 25 characters
    if (e.target.value.length <= 25) {
      setReminderText(e.target.value);
    }
  };

  return (
    <div className="reminder-container">
      <h2>Reminder</h2>
      {/* Input field for adding a reminder */}
      <div className="add-reminder">
        <input
          type="text"
          value={reminderText}
          onChange={handleReminderTextChange}
          placeholder="Set your reminder here"
          disabled={reminderAdded} // Disable input field if reminder is added
        />
        <input
          type="datetime-local"
          value={reminderDateTime}
          onChange={(e) => setReminderDateTime(e.target.value)}
          placeholder="Select date and time"
          disabled={reminderAdded} // Disable input field if reminder is added
        />
        <button
          onClick={reminderAdded ? handleClearReminder : handleAddReminder}
          // Remove disabled attribute
        >
          {reminderAdded ? "Clear" : "Add"}
        </button>
      </div>
      {/* Display added reminder */}
      <ul style={{ listStyleType: "none" }}>
        {reminder && (
          <li className={`reminder-item ${isOverdue() ? "overdue" : ""}`}>
            <div>
              {reminder.text} ⏰ {reminder.datetime}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};
