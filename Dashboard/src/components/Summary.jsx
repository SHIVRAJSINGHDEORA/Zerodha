import {useState, useEffect } from "react";
import axios from "axios"
import "./styles/Summary.css";

export default function Summary() {
  const [allHoldings, setAllHoldings] = useState([]);

  const totalInvestment = allHoldings.reduce((total,stock)=> total + stock.qty * stock.avg, 0).toFixed(2);
  const currentValue = allHoldings.reduce((total,stock)=>total + stock.price * stock.qty , 0).toFixed(2);
  const margin = (currentValue - totalInvestment).toFixed(2);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/holdings`, {withCredentials : true})
      .then((res) => {
        
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const username = sessionStorage.getItem("username");
  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              {margin}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentValue}</span>{" "}
            </p>
            <p>
              Investment <span>{totalInvestment}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
}
