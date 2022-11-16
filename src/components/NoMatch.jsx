import Sidebar from "./Sidebar";

function NoMatch() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <img src="../../public/img/NoMatch.svg" alt="" />
          <h1>No Match</h1>
        </main>
      </div>
    </div>
  );
}
export default NoMatch;
