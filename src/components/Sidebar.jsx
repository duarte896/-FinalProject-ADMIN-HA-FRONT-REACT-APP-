import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import {
  BsHouseDoor,
  BsBoxSeam,
  BsTruck,
  BsLock,
  BsPerson,
  BsTextLeft,
  BsArrowUpLeftSquare,
} from "react-icons/bs";

function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse m-0 p-0"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column" style={{ fontSize: "1.1rem" }}>
          <li>
            <Link
              to={"/"}
              className={styles.sidebar_link + " d-flex align-items-center"}
              aria-current="page"
              eventKey="dashboard"
            >
              <BsHouseDoor /> <span className="ms-1">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.sidebar_link + " d-flex align-items-center"}
              to={"/orders"}
              eventKey="orders"
            >
              <BsTruck /> <span className="ms-1">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.sidebar_link + " d-flex align-items-center"}
              to={"/products"}
              eventKey="products"
            >
              <BsBoxSeam /> <span className="ms-1">Products</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.sidebar_link + " d-flex align-items-center"}
              to={"/categories"}
              eventKey="categories"
            >
              <BsTextLeft /> <span className="ms-1">Categories</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.sidebar_link + " d-flex align-items-center"}
              to={"/customers"}
              eventKey="customers"
            >
              <BsPerson /> <span className="ms-1">Customers</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.sidebar_link + " d-flex align-items-center"}
              to={"/admins"}
              eventKey="admins"
            >
              <BsLock /> <span className="ms-1">Admins</span>
            </Link>
          </li>
          <hr />

          <li className={styles.frontLink}>
            <a
              className={styles.back_web + " d-flex align-items-center"}
              href="https://ksurf-hackacademy.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
              eventkey="back"
            >
              <BsArrowUpLeftSquare />
              <span className="ms-1">Back to e&#8209;commerce</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Sidebar;
