import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import './../styles/App.css';
import AdminPanel from "./AdminPanel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
