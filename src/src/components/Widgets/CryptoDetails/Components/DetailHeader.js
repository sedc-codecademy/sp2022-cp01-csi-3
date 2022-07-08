import "./DetailHeader.css";

function DetailHeader() {
  return (
    <div className="Header-Container">
      <div className="Title">
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
          alt="Logo not found"
          className="logo"
        ></img>
        <h1> Bitcoin Price</h1>
        <h2 className="money-text">$ 20,136.71</h2>
      </div>
    </div>
  );
}

export default DetailHeader;
