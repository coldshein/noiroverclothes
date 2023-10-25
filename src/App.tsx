import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import FullCard from "./pages/FullCard/FullCard";
import ProductList from "./components/ProductList/ProductList";
import Designers from "./pages/Designers/Designers";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home/>}/>
          <Route path="/products" element={<ProductList />}>
            <Route path="/products/:sex" element={<ProductList/>}/>
          </Route>
          <Route path="/product/:link/:id" element={<FullCard />} />
          <Route path="/designers" element={<Designers/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
