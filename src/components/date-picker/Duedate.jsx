import { useState } from "react";
import "./duedate.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Duedate = ({ handler }) => {
  const [duedate, setDuedate] = useState(new Date());

  return (
    <DatePicker
      name="duedate"
      id="duedate-input"
      dateFormat="yyyy/MM/dd"
      placeholderText="Pick duedate"
      showIcon
      showWeekNumbers
      weekLabel="w"
      selected={duedate}
      onSelect={date => setDuedate(date)}
      onChange={() => handler(duedate)}
    />
  );
};
