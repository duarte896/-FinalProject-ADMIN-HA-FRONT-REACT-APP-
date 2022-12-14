import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to={"/"}>
        KSURF
      </Link>
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
      <div className=" w-100"></div>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <button
            onClick={() => dispatch(logout())}
            className="bg-dark nav-link px-3"
            style={{ border: "none" }}
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
