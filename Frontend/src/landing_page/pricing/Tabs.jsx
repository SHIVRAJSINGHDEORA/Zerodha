import { useState } from "react";
import "./pricing.css";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("equities");

  let tabChange = (e) => {
    setActiveTab(e.currentTarget.dataset.id);
  };
  return (
    <>
      <nav class="tabs border-bottom">
        <a
          className={`tab ${activeTab == "equities" ? "active" : ""}`}
          href="#tab-equities"
          data-id="equities"
          onClick={tabChange}
        >
          Equity
        </a>
        <a
          className={`tab ${activeTab == "currency" ? "active" : ""}`}
          href="#tab-currency"
          data-id="currency"
          onClick={tabChange}
        >
          Currency
        </a>
        <a
          className={`tab ${activeTab == "commodities" ? "active" : ""}`}
          href="#tab-commodities"
          data-id="commodities"
          onClick={tabChange}
        >
          Commodity
        </a>
        <br />
        <br />
      </nav>
      <br />
      <br />
      <div
        className="card"
        style={{ display: activeTab == "equities" ? "block" : "none" }}
      >
        <table className="table custom-table">
          <thead>
            <tr>
              <th></th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&amp;O - Futures</th>
              <th>F&amp;O - Options</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>Zero Brokerage</td>
              <td>0.03% or ₹20 / executed order whichever is lower</td>
              <td>0.03% or ₹20 / executed order whichever is lower</td>
              <td>Flat ₹20 per executed order</td>
            </tr>

            <tr>
              <td>STT / CTT</td>
              <td>0.1% on buy &amp; sell</td>
              <td>0.025% on the sell side</td>
              <td>0.02% on the sell side</td>
              <td>
                <ul className="mb-0">
                  <li>0.125% of intrinsic value on exercised options</li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>Transaction charges</td>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00173% <br />
                BSE: 0
              </td>
              <td>
                NSE: 0.03503% (on premium) <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>

            <tr>
              <td>GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>

            <tr>
              <td>SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>

            <tr>
              <td>Stamp charges</td>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="card"
        style={{ display: activeTab == "currency" ? "block" : "none" }}
      >
        <table className="table custom-table">
          <thead>
            <tr>
              <th></th>
              <th>Currency futures</th>
              <th>Currency options</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>0.03% or ₹20 / executed order whichever is lower</td>
              <td>₹20 / executed order</td>
            </tr>

            <tr>
              <td>STT / CTT</td>
              <td>No STT</td>
              <td>No STT</td>
            </tr>

            <tr>
              <td>Transaction charges</td>
              <td>
                NSE: 0.00035% <br />
                BSE: 0.00045%
              </td>
              <td>
                NSE: 0.0311% <br />
                BSE: 0.001%
              </td>
            </tr>

            <tr>
              <td>GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>

            <tr>
              <td>SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>

            <tr>
              <td>Stamp charges</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="card"
        style={{ display: activeTab == "commodities" ? "block" : "none" }}
      >
        <table className="table custom-table">
          <thead>
            <tr>
              <th></th>
              <th>Commodity futures</th>
              <th>Commodity options</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>0.03% or ₹20 / executed order whichever is lower</td>
              <td>₹20 / executed order</td>
            </tr>

            <tr>
              <td>STT / CTT</td>
              <td>0.01% on sell side (Non-Agri)</td>
              <td>0.05% on sell side</td>
            </tr>

            <tr>
              <td>Transaction charges</td>
              <td>
                MCX: 0.0021% <br />
                NSE: 0.0001%
              </td>
              <td>
                MCX: 0.0418% <br />
                NSE: 0.001%
              </td>
            </tr>

            <tr>
              <td>GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>

            <tr>
              <td>SEBI charges</td>
              <td>
                <strong>Agri:</strong> ₹1 / crore <br />
                <strong>Non-agri:</strong> ₹10 / crore
              </td>
              <td>₹10 / crore</td>
            </tr>

            <tr>
              <td>Stamp charges</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
