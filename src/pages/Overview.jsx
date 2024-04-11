import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const Overview = () => {
  return (
    <div>
      <h1>This is the overview page!</h1>
      <Link to="/todo">Go to ToDo-List!</Link>
      <Link to="/todo/:add_todo">
        <Button />
      </Link>
    </div>
  );
};
