
import { MainPage } from "./components/MainPage";
import { AppDataProvider } from "./contexts/FormContext";
import { ModeProvider } from "./contexts/ModeContext";

export const App = () => {
  return (
    <>
      <div>Find me in App.jsx!</div>
      <AppDataProvider>
        <ModeProvider>
          <MainPage />
          
        </ModeProvider>
      </AppDataProvider>
    </>
  );
};
