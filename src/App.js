import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/contact";
// import Category from './pages/category';
import Loginpage from "./pages/loginpage";
import Register from "./Register";
import Cart from "./pages/cart";
import Productlist from "./pages/productlist";
import Products from "./pages/products";

function App() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div className="h-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/category" element={ isLoggedIn ?   <Category /> : <Loginpage/>} />  */}
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Productlist" element={<Productlist />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
