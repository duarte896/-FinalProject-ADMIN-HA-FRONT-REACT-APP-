import styles from "./Home.module.css";
import Sidebar from "../../Sidebar";
import { HomeChart } from "./Chart";
import { BsHandbagFill, BsFillEnvelopeOpenFill } from "react-icons/bs";
import { HiCursorClick } from "react-icons/hi";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>
          <div className="container mt-5">
            <HomeChart />
            <div className="row mt-5 d-flex justify-content-between">
              <div
                className={
                  "col-md-12 col-lg-3 shadow p-3 mb-5 bg-body rounded border " +
                  styles.card
                }
              >
                <BsHandbagFill className={styles.icons} />{" "}
                <div className="ms-5">
                  <span>Montly Sales (USD)</span>
                  <h2>450.980</h2>
                </div>
              </div>
              <div
                className={
                  "col-md-12 col-lg-3 shadow p-3 mb-5 bg-body rounded border " +
                  styles.card
                }
              >
                <BsFillEnvelopeOpenFill className={styles.icons} />{" "}
                <div className="ms-5">
                  <span>Conversion Rate</span>
                  <h2>19.16%</h2>
                </div>
              </div>
              <div
                className={
                  "col-md-12 col-lg-3 shadow p-3 mb-5 bg-body rounded border " +
                  styles.card
                }
              >
                <HiCursorClick className={styles.icons} />{" "}
                <div className="ms-5">
                  <span>Avg. Click Rate</span>
                  <h2>24.57%</h2>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Home;
