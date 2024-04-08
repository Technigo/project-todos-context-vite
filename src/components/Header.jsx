import "./Header.css";
import { useAppData } from "../themes/AppTheme";

export const Header = () => {
  const { name, appContent } = useAppData();
  console.log(name, appContent);

  return (
    <header>
      <h1>{appContent.heading}</h1>
    </header>
  );
};
