import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </div>
  );
}

export default App;
