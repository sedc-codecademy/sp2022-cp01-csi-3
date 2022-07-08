import React, { useState } from "react";
import "./Market.css";
import MarketsTable from '../../Widgets/MarketsTable/MarketsTable';
import { environment } from "../../../environment";
import TrendingMarkets from "../../Widgets/TrendingMarkets/TrendingMarkets";

let hold = [];


function Market() {
  const [Cryptodata, setData] = useState([]);

  fetch(environment.coinGeckoBaseURL + "coins/markets?vs_currency=USD")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setData(data);
      hold = data;
    });

  return (
    <div>
      <TrendingMarkets data={Cryptodata}></TrendingMarkets>
      <MarketsTable data={Cryptodata}></MarketsTable>
    </div>
  );
}

console.log(hold);
Market.defaultProps = {};

export default Market;
