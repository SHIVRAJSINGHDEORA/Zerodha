export default function Pricing() {
  return (
    <div className="container mt-5 p-5">
      <div className="row align-items-center">
        <div className="col-4">
          <h3>Unbeatable pricing</h3>
          <p className="mt-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div
          style={{ fontSize: "12px" }}
          className="col d-flex align-items-center"
        >
          <img
            style={{ width: "60%" }}
            src="/media/images/pricingMF.svg"
            alt="Pricing"
          />
          <p>Free account opening</p>
        </div>
        <div
          style={{ fontSize: "10px" }}
          className="col d-flex align-items-center"
        >
          <img
            style={{ width: "60%" }}
            src="/media/images/pricingEquity.svg"
            alt="Pricing"
          />
          <p>Free equity delivery and direct mutual funds</p>
        </div>
        <div
          style={{ fontSize: "12px" }}
          className="col d-flex align-items-center"
        >
          <img
            style={{ width: "60%" }}
            src="/media/images/intradayTrades.svg"
            alt="Pricing"
          />
          <p>Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}
