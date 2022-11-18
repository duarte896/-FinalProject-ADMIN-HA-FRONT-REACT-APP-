import Orders from "../orders/Orders";
import Sidebar from "../../Sidebar";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>
          <canvas
            className="my-4 w-100"
            id="myChart"
            width="900"
            height="380"
          ></canvas>

          {/* <Orders /> */}
        </main>
      </div>
    </div>
  );
}
export default Home;
