import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to={"/"} className="nav-link active" aria-current="page">
              <span
                data-feather="AdminLayout"
                className="align-text-bottom"
              ></span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/orders"}>
              <span data-feather="file" className="align-text-bottom"></span>
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
              <span data-feather="users" className="align-text-bottom"></span>
              Customers
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Saved reports</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
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
  );
}
export default Sidebar;
