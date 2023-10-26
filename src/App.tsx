import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import FullCard from "./pages/FullCard/FullCard";
import ProductList from "./components/ProductList/ProductList";
import Designers from "./pages/Designers/Designers";
import Home from "./pages/Home/Home";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <div className="app-container">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/products" element={<ProductList />}>
              <Route path="/products/:sex" element={<ProductList />} />
            </Route>
            <Route path="/product/:link/:id" element={<FullCard />} />
            <Route path="/designers" element={<Designers />} />
          </Route>
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
