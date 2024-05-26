const Loader = () => {
  console.log("loader");
  let arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(
      <div className="card-loader">
        <div className="inner-block">Loading....</div>
      </div>
    );
  }
  return <>{arr}</>;
};

export default Loader;
