import { MainPage } from "./components/main/MainPage";
import { AppDataProvider } from "./contexts/FormContext";
import { ModeProvider } from "./contexts/ModeContext";

export const App = () => {
  return (
    <>
      <AppDataProvider>
        <ModeProvider>
          <MainPage />
        </ModeProvider>
      </AppDataProvider>
    </>
  );
};