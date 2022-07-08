import "./SideInfo.css";

function SideInfo(prop) {
  return (
    <div className="Container122">
      
      <div className="Top10-Container">
        <h2 className="tile">Top 10</h2>
        <table>
          {prop.data
            .sort((a, b) => {
              if (a.market_cap > b.market_cap_rank) {
                return 1;
              } else {
                return -1;
              }
            })
            .filter((x, index) => index < 10)
            .map((data, index) => (
              <tr>
                <td>
                  <img
                    src={data.image}
                    alt="Logo not found"
                    className="logo"
                  ></img>
                </td>
                <td>{data.name}</td>
                <td>{data.current_price}</td>
                <td>{data.price_change_percentage_24h.toFixed(2)}</td>
              </tr>
            ))}
        </table>
      </div>
      <div className="Top3-Container">
        <h2 className="tile">Latest Update</h2>
        <table>
          {prop.data
            .sort((a, b) => {
              if (a.last_updated > b.last_updated) {
                return 1;
              } else {
                return -1;
              }
            })
            .filter((x, index) => index < 3)
            .map((data, index) => (
              <tr>
                <td>
                  <img
                    src={data.image}
                    alt="Logo not found"
                    className="logo"
                  ></img>
                </td>
                <td>{data.name}</td>
                <td>{data.current_price}</td>
                <td>{data.price_change_percentage_24h.toFixed(2)}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

export default SideInfo;
