import { Link } from "react-router-dom";
import "./styles/Orders.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CachedIcon from "@mui/icons-material/Cached";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/order",{withCredentials : true})
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handelRefresh = () => {
    axios
      .get("http://localhost:8080/order" , {withCredentials : true})
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="orders">
      <div className="title-container">
        <h3 className="title">Orders ({orders.length})</h3>
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
              <th>Buy Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <br />
      </div>
    </div>
  );
}
