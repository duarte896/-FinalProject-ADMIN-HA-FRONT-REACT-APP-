import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
        KSURF
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
