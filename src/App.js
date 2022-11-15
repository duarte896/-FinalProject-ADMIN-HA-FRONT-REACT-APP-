import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Products from "./components/pages/products/Products";
import Chart from "./components/pages/home/Chart";
import Orders from "./components/pages/orders/Orders";
import Order from "./components/pages/orders/Order";
import Home from "./components/pages/home/Home";
import Customers from "./components/pages/customers/Customers";
import CreateProduct from "./components/forms/CreateProduct";
import Login from "./components/pages/login/Login";
import Customer from "./components/pages/customers/Customer";
import Admins from "./components/pages/admin/Admins";
import Navbar from "./components/MainStructure";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/crear" element={<CreateProduct />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
