import { useState } from "react";
import "./WorkoutBlock.css";

export const WorkoutBlock = () => {
  const [workoutDays, setWorkoutDays] = useState(Array(7).fill(false));

  const toggleWorkoutDay = (index) => {
    const updatedWorkoutDays = [...workoutDays];
    updatedWorkoutDays[index] = !updatedWorkoutDays[index];
    setWorkoutDays(updatedWorkoutDays);
  };

  return (
    <div className="workout-container">
      <h2>Workout</h2>
      <div className="workout-days">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
          <div
            key={day}
            className={`workout-day ${workoutDays[index] ? "active" : ""}`}
            onClick={() => toggleWorkoutDay(index)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
