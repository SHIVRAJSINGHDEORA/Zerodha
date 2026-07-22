import { Tooltip, Grow } from "@mui/material";
import { useState, useContext } from "react";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { GeneralContext } from "./GeneralContext";
import PieChart from "./PieChart";
import "./styles/WatchList.css";

export default function WatchList() {
  const data = {
    labels: watchlist.map((stock) => stock["name"]),
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "#581845",
          "rgba(255, 0, 55, 1)",
          "#900C3F",
          "#C70039",
          "#FFC300",
          "#33FFF6",
          "#FFBD33",
          "#FF33A6",
          "#3357FF",
          "#33FF57",
        ],
        borderColor: [
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
          "rgb(255, 255, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
            className="search"
          />
          <span className="counts"> {watchlist.length} / 50</span>
        </div>

        <ul className="list">
          {watchlist.map((stock, idx) => (
            <WatchListInfo stock={stock} idx={idx} />
          ))}
        </ul>
        <PieChart data={data} />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

function WatchListInfo({ stock, idx }) {
  const [watchlistAction, setWatchlistAction] = useState(false);

  let handleMouseEnter = () => {
    setWatchlistAction(true);
  };

  let handleMouseLeave = () => {
    setWatchlistAction(false);
  };

  return (
    <>
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={idx}
      >
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="item-info">
            <span className="percent">{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="up" />
            )}
            <span>{stock.price.toFixed(2)}</span>
          </div>
        </div>
        {watchlistAction && <WatchlistActions uid={stock.name} />}
      </li>
    </>
  );
}

function WatchlistActions({ uid }) {
  const generalContext = useContext(GeneralContext);

  let handleBuyClick = () => {
    let id = "buy-option";
    generalContext.OpenWindow(uid, id);
  };

  let handleSellClick = () => {
    let id = "sell-option";
    generalContext.OpenWindow(uid, id);
  };

  return (
    <span className="actions">
      <Tooltip title="Buy" arrow placement="top" onClick={handleBuyClick}>
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip title="Sell" arrow placement="top">
        <button className="sell" onClick={handleSellClick}>
          Sell
        </button>
      </Tooltip>
      <Tooltip title="Analytics" arrow placement="top">
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" arrow placement="top">
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
}
