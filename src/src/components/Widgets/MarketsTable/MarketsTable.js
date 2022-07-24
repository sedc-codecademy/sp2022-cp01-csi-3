import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./MarketsTable.css";

function MarketsTable(prop) {
  const [value, setValue] = useState([]);

  console.log(value);

  let filterComponents = (e) => {
    switch (e.target.value) {
      case "Name":
        prop.data.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case "Price":
        prop.data.sort((a, b) => {
          if (a.data.current_price > b.data.current_price) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case "24Change":
        prop.data.sort((a, b) => {
          if (a.high_24h > b.high_24h) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case "MarketCap":
        prop.data.sort((a, b) => {
          if (a.market_cap > b.market_cap) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
    }
  };

  return (
    <div>
      <div className="Filter">
        <select onClick={filterComponents} className="FilterBy" name="FilterBy">
          <option value="#" disabled selected>
            Filter By
          </option>
          <option value="Name">Name</option>
          <option value="Price">Price</option>
          <option value="MarketCap">Market Cap</option>
          <option value="24Change">24 Change</option>
        </select>
      </div>
      
      <div className="Container-Table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="TableHead-Container">
              <TableRow className="TableRow-Container">
                <TableCell className="tableCell">#</TableCell>
                <TableCell className="tableCell">Logo</TableCell>
                <TableCell className="tableCell"> Name</TableCell>
                <TableCell className="tableCell">Price</TableCell>
                <TableCell className="tableCell">24h% Change</TableCell>
                <TableCell className="tableCell">Volume(24h)</TableCell>
                <TableCell className="tableCell">Market Cap</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="TBody">
              {prop.data.map((data) => (
                <TableRow
                  key={data.market_cap_rank}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>{data.market_cap_rank}</TableCell>
                  <TableCell>
                    <img
                      src={data.image}
                      alt="Logo not found"
                      className="logo"
                    ></img>
                  </TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>$ {data.current_price.toLocaleString()}</TableCell>
                  {/* <TableCell>
                    {data.price_change_percentage_24h.toFixed(2)} %
                  </TableCell> */}
                    {data.price_change_percentage_24h.toFixed(2) < 0 && <TableCell id="BellowPercent">{data.price_change_percentage_24h.toFixed(2)} %</TableCell>}
                    {data.price_change_percentage_24h.toFixed(2) > 0 && <TableCell id="AbovePercent">{data.price_change_percentage_24h.toFixed(2)} %</TableCell>}
                    {data.price_change_percentage_24h.toFixed(2) == 0 && <TableCell id="AbovePercent">{data.price_change_percentage_24h.toFixed(2)} %</TableCell>}

                  <TableCell>{data.high_24h.toLocaleString()} M</TableCell>
                  <TableCell>${data.market_cap.toLocaleString()} M</TableCell>
                  <TableCell>
                    <a href="/crypto-details">Detail</a>
                  </TableCell>
                  <TableCell>
                    <a href="https://www.binance.com/en/markets">Trade</a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default MarketsTable;
