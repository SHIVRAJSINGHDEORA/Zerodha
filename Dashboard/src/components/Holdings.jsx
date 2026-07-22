import { useState, useEffect } from "react";
import axios from "axios";
import VerticalGraph from "./VerticalGraph";
import "./styles/Holdings.css";
import CachedIcon from "@mui/icons-material/Cached";

export default function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  const totalInvestment = allHoldings.reduce((total,stock)=> total + stock.qty * stock.avg, 0).toFixed(2);
  const currentValue = allHoldings.reduce((total,stock)=>total + stock.price * stock.qty , 0).toFixed(2);
  const margin = (currentValue - totalInvestment).toFixed(2);

  useEffect(() => {
    axios
      .get( `${import.meta.env.VITE_API_URL}/holdings`,{withCredentials : true})
      .then((res) => {
        
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const labels = allHoldings.map((stock) => stock["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  let handelRefresh = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/holdings`,{withCredentials : true})
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="title-container">
        <h3 className="title">Holdings ({allHoldings.length})</h3>
        <div className="refresh-icon">
          <button onClick={handelRefresh}>
            Refresh &nbsp; <CachedIcon />
          </button>
        </div>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, idx) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={idx}>
                  <td>{stock.name}</td>
                  <td>{stock.qty.toFixed(2)}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValue}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{margin}</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
}
