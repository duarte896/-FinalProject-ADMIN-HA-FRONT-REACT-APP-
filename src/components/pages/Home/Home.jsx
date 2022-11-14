import Orders from "../Orders/Orders";

function Home(params) {
  return (
    <>
      <canvas
        className="my-4 w-100"
        id="myChart"
        width="900"
        height="380"
      ></canvas>

      <Orders />
    </>
  );
}
export default Home;
