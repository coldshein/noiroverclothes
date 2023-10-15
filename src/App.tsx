import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import FullCard from "./pages/FullCard/FullCard";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:link/:id" element={<FullCard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
