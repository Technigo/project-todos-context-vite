import { useEffect, useState } from "react";
import "./select.css";

export const Select = ({ type, handler }) => {
  const [options, setOptions] = useState([]);
  const categories = ["Prio", "Must have", "Nice to have", "Could have"];
  const sprints = ["Sprint", "Current", "Next", "Future"];
  const projects = ["Project", "To do", "None"];

  useEffect(() => {
    switch (type) {
      case "category":
        setOptions(categories);
        break;
      case "sprint":
        setOptions(sprints);
        break;
      default:
        setOptions(projects);
        break;
    }
  }, []);

  return (
    <select
      name={type}
      id={`${type}-select`}
      className="select"
      value={options[0]}
      onChange={handler}>
      {options.map(op => {
        return (
          <option
            key={op}
            value={op}>
            {op}
          </option>
        );
      })}
    </select>
  );
};
