import "../style/Heading.scss";
import { FaClipboardList } from "react-icons/fa";

export const Heading = () => {
  return (
    <>
      <div className="heading-background">
        <FaClipboardList className="checklist" />
        <h1>Your ToDo List</h1>
        <FaClipboardList className="checklist" />
      </div>
    </>
  );
};
