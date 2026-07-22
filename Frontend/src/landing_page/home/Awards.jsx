export default function Awards() {
  return (
    <div className="container p-5 mt-5 mb-5">
      <div className="row">
        <div className="col-6 mt-5">
          <img src="/media/images/largestBroker.svg" alt="Award Image" />
        </div>
        <div className="col mt-5 offset-1 fs-5">
          <h2>Largest stock broker in India</h2>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Stocks & IPOs </li>
                <li>Commodity derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Direct mutual funds</li>
                <li>Currency derivatives</li>
                <li>Bonds and Govt. Security</li>
              </ul>
            </div>
            <img src="/media/images/pressLogos.png" alt="Press Logos" />
          </div>
        </div>
      </div>
     
    </div>
  );
}
