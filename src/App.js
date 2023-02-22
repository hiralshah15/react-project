import "./styles.css";
import Loader from "./components/Loader";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";

import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <Loader />
    </div>
  );
}
