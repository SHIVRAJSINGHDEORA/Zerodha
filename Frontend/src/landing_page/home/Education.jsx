export default function Education() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-5">
          <img
            style={{ width: "100%" }}
            src="/media/images/education.svg"
            alt=""
          />
        </div>
        <div className="col-6 offset-1 fs-5">
          <h3>Free and open market education</h3>
          <br />
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a style={{ textDecoration: "none" }} href="/">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <br />
          <br />
          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries
          </p>
          <a style={{ textDecoration: "none" }} href="/">
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
