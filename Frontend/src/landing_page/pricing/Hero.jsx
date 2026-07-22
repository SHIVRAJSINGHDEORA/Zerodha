import "./pricing.css";
export default function Hero() {
  return (
    <>
      <div className="text-center hero">
        <h3>Charge</h3>
        <h6>List of all charges and taxes</h6>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="/media/images/pricingMF.svg" alt="Pricing" />
            <h3>Free equity delivery</h3>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col offset-1">
            <img src="/media/images/pricingEquity.svg" alt="Pricing" />
            <h3>Intraday and F&O trades</h3>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col offset-1">
            <img src="/media/images/intradayTrades.svg" alt="Pricing" />
            <h3>Free direct MF</h3>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
