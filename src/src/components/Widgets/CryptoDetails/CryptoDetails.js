import React, { useState } from "react";
import PropTypes from "prop-types";
import DetailHeader from "./Components/DetailHeader.js";
import DetailChart from "./Components/DetailsChart.js";
import SideInfo from "./Components/SideInfo.js";
import { environment } from "../../../environment";
import "./CryptoDetails.css";

let hold = [];

const Detail = () => {
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
    <div className="Detail">
      <DetailHeader></DetailHeader>
      <DetailChart></DetailChart>
      {/* <SideInfo data={Cryptodata}></SideInfo> */}
    </div>
  );
};

Detail.propTypes = {};

Detail.defaultProps = {};

export default Detail;
