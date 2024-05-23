import React, { useState } from "react";
import "./StickyNote.css";

export const StickyNote = () => {
  const [notes, setNotes] = useState([]);

  const handleInputChange = (index, e) => {
    const updatedNotes = [...notes];
    updatedNotes[index].text = e.target.value;
    setNotes(updatedNotes);
  };

  const handleSaveClick = (index) => {
    const updatedNotes = [...notes];
    if (updatedNotes[index].text.trim() === "") {
      updatedNotes.splice(index, 1);
    } else {
      updatedNotes[index].isEditing = false;
    }
    setNotes(updatedNotes);
  };

  const handleEditClick = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].isEditing = true;
    setNotes(updatedNotes);
  };

  const handleColorChange = (index, color) => {
    const updatedNotes = [...notes];
    updatedNotes[index].color = color;
    setNotes(updatedNotes);
  };

  const handleDeleteClick = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const addNewNote = () => {
    if (notes.length < 2) {
      const newNote = { text: "", isEditing: true, color: "#fff29e" };
      setNotes([...notes, newNote]);
    }
  };

  return (
    <div className="sticky-note-container">
      <h2>Sticky Notes</h2>
      <div className="sticky-note-wrapper">
        {notes.map((note, index) => (
          <div
            key={index}
            className="sticky-note"
            style={{ backgroundColor: note.color }}
          >
            {note.isEditing ? (
              <div className="editing">
                <textarea
                  value={note.text}
                  onChange={(e) => handleInputChange(index, e)}
                  className="note-textarea"
                  maxLength={150}
                />
                <div className="editing-controls">
                  <div className="color-picker">
                    <select
                      value={note.color}
                      onChange={(e) => handleColorChange(index, e.target.value)}
                    >
                      <option value="#fff29e">Yellow</option>
                      <option value="#ffcc80">Orange</option>
                      <option value="#dd3838">Red</option>
                      <option value="#aad3ac">Green</option>
                      <option value="#90caf9">Blue</option>
                      <option value="#f48fb1">Pink</option>
                      <option value="#ce93d8">Purple</option>
                    </select>
                  </div>
                  <div>
                    <button
                      onClick={() => handleSaveClick(index)}
                      className="save-button"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => handleDeleteClick(index)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {note.text && <p className="note-text">{note.text}</p>}
                <button
                  onClick={() => handleEditClick(index)}
                  className="edit-button"
                >
                  {note.text ? "Edit" : "Add note"}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {notes.length < 2 && !notes.some((note) => note.isEditing) && (
        <button onClick={addNewNote} className="add-note-button">
          Add Note
        </button>
      )}
    </div>
  );
};
