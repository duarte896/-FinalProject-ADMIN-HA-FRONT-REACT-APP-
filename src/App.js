import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import Products from "./components/pages/products/Products";
import Categories from "./components/pages/categories/Categories";
import Chart from "./components/pages/home/Chart";
import Orders from "./components/pages/orders/Orders";
import Order from "./components/pages/orders/Order";
import Home from "./components/pages/home/Home";
import Customers from "./components/pages/customers/Customers";
import CreateProduct from "./components/forms/CreateProduct";
import CreateAdmin from "./components/forms/CreateAdmin";
import Login from "./components/pages/login/Login";
import Customer from "./components/pages/customers/Customer";
import Admins from "./components/pages/admin/Admins";
import Navbar from "./components/Navbar";
import Admin from "./components/pages/admin/Admin";
import Product from "./components/pages/products/Product";
import NoMatch from "./components/NoMatch";
import EditProduct from "./components/forms/EditProduct";
import Category from "./components/pages/categories/Category";

function App() {
  const user = useSelector((state) => state.user);
  console.log(user.user);
  return (
    <div className="App">
      <Navbar user={user.user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />

        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/orders/:id" element={<Order />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/edit/:slug" element={<EditProduct />} />
        <Route path="/categories/:name" element={<Category />} />
        <Route path="/customers/:id" element={<Customer />} />
        <Route path="/admin/create" element={<CreateAdmin />} />
        <Route path="/admins/:id" element={<Admin />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
