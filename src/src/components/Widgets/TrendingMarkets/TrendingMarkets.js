import * as React from "react";
import "./TrendingMarkets.css";

function TrendingMarkets(prop) {
  return (
    <div className="Container">
      
      {/* Table Market cap */}
      <table className="Table-Container">
        <caption>Top Market Cap</caption>
        {prop.data
          .sort((a, b) => {
            if (a.market_cap > b.market_cap) {
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
              {data.price_change_percentage_24h.toFixed(2) < 0 && <td id="BellowPercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
              {data.price_change_percentage_24h.toFixed(2) > 0 && <td id="AbovePercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
              {data.price_change_percentage_24h.toFixed(2) == 0 && <td id="AbovePercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
            </tr>
          ))}
      </table>
      {/* Table Top volume  rank */}
      <table className="Table-Container">
        <caption>Top volume rank</caption>
        {prop.data
          .sort((a, b) => {
            if (a.high_24h > b.high_24h) {
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
              {data.price_change_percentage_24h.toFixed(2) < 0 && <td id="BellowPercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
              {data.price_change_percentage_24h.toFixed(2) > 0 && <td id="AbovePercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
              {data.price_change_percentage_24h.toFixed(2) == 0 && <td id="AbovePercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
            </tr>
          ))}
      </table>
      {/* Hihest Price Precentage  */}
      <table className="Table-Container">
      <caption>Highest price percentage </caption>
        {prop.data
          .sort((a, b) => {
            if (a.price_change_percentage_24h > b.price_change_percentage_24h) {
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
              {data.price_change_percentage_24h.toFixed(2) < 0 && <td id="BellowPercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
              {data.price_change_percentage_24h.toFixed(2) > 0 && <td id="AbovePercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
              {data.price_change_percentage_24h.toFixed(2) == 0 && <td id="AbovePercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
            </tr>
          ))}
      </table>
      {/* Top market cap rank */}
      <table className="Table-Container">
      <caption>Highest market cap rank</caption>
        {prop.data
          .sort((a, b) => {
            if (a.market_cap_rank > b.market_cap_rank) {
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
              {data.price_change_percentage_24h.toFixed(2) < 0 && <td id="BellowPercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
              {data.price_change_percentage_24h.toFixed(2) > 0 && <td id="AbovePercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
              {data.price_change_percentage_24h.toFixed(2) == 0 && <td id="AbovePercent">{data.price_change_percentage_24h.toFixed(2)}%</td>}
            </tr>
          ))}
      </table>
    </div>
  );
}

export default TrendingMarkets;
