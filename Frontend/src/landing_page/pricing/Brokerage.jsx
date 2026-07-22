import Tabs from "./Tabs";
import "./pricing.css";
import ChargeDisclosure from "./ChargesDisclosure";
export default function Brokerage() {

  return (
    <div className="brokerage p-5 mx-5">
      <Tabs/>
      <br />
      <br />
      <br />
      <h3>Charges for account opening</h3>
      <br />
      <div class="card">
        <table class="table  custom-table">
          <thead>
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span class="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <span class="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <h3>Demat AMC (Annual Maintenance Charge)</h3>
      <br />
      <div class="card">
        <table class="table  custom-table">
          <thead>
            <tr>
              <th>Value of holdings</th>
              <th>AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>
                <span class="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <p>
        * Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA). BSDA account holders cannot hold more
        than one demat account. To learn more about BSDA, click here.
      </p>
      <br />
      <br />
      <br />
      <h3>Charges for optional value added services</h3>
      <br />
      <div class="card">
        <table class="table  custom-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Billing Frquency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <h3>Charges explained</h3>
      <br />
      <br />
      <ChargeDisclosure/>
      </div>
  );
}
