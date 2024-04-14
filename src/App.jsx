import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page/HomePage";
import { AddTaskPage } from "./pages/add-task-page/AddTaskPage";
import { AppDataProvider } from "./context/AppContext";

export const App = () => {
  return (
    <BrowserRouter>
      <AppDataProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task/add" element={<AddTaskPage />} />
        </Routes>
      </AppDataProvider>
    </BrowserRouter>
  );
};
