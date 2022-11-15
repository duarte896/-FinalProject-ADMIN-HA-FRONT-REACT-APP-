import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Products from "./components/pages/Products/Products";
<<<<<<< HEAD
import Chart from "./components/pages/home/Chart";
import Orders from "./components/pages/orders/Orders";
import Home from "./components/pages/home/Home";
import Customers from "./components/pages/customers/Customers";
import CreateProduct from "./components/forms/CreateProduct";
=======
import Chart from "./components/pages/Home/Chart";
import Orders from "./components/pages/Orders/Orders";
import Home from "./components/pages/Home/Home";
import Customers from "./components/pages/Customers/Customers";
import Order from "./components/pages/Orders/Order";
>>>>>>> c464a7a8147e4faf66c8ce9ad975b927d8321dbb

function App() {
  return (
    <div className="App">
      <>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
            Hack Analitics
          </a>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <input
            className="form-control form-control-dark w-100 rounded-0 border-0"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="#">
                Sign out
              </a>
            </div>
          </div>
        </header>

        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link
                      to={"/"}
                      className="nav-link active"
                      aria-current="page"
                    >
                      <span
                        data-feather="AdminLayout"
                        className="align-text-bottom"
                      ></span>
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/orders"}>
                      <span
                        data-feather="file"
                        className="align-text-bottom"
                      ></span>
                      Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/products"}>
                      <span
                        data-feather="shopping-cart"
                        className="align-text-bottom"
                      ></span>
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/customers"}>
                      <span
                        data-feather="users"
                        className="align-text-bottom"
                      ></span>
                      Customers
                    </Link>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                  <span>Saved reports</span>
                  <a
                    className="link-secondary"
                    href="#"
                    aria-label="Add a new report"
                  >
                    <span
                      data-feather="plus-circle"
                      className="align-text-bottom"
                    ></span>
                  </a>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span
                        data-feather="file-text"
                        className="align-text-bottom"
                      ></span>
                      Current month
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span
                        data-feather="file-text"
                        className="align-text-bottom"
                      ></span>
                      Last quarter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span
                        data-feather="file-text"
                        className="align-text-bottom"
                      ></span>
                      Social engagement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span
                        data-feather="file-text"
                        className="align-text-bottom"
                      ></span>
                      Year-end sale
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
<<<<<<< HEAD
                <h1 className="h2">Dashboard</h1>
                {/* <div className="btn-toolbar mb-2 mb-md-0">
=======
                <h1 className="h2">KSURF</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
>>>>>>> c464a7a8147e4faf66c8ce9ad975b927d8321dbb
                  <div className="btn-group me-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Share
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Export
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                  >
                    <span
                      data-feather="calendar"
                      className="align-text-bottom"
                    ></span>
                    This week
                  </button>
                </div> */}
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/crear" element={<CreateProduct />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/orders/:id" element={<Order />} />
                {/* <Route path="/products/:id" element={<Product />} />
                <Route path="/customers/:id" element={<Customer />} /> */}
              </Routes>
            </main>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
