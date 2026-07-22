import "./product.css"
export default function Universe() {
  return (
    <>
      <div className="text-center">
        <h6>
          Want to know more about our technology stack? Check out the{" "}
          <a href="https://zerodha.tech/"> Zerodha.tech</a> blog.
        </h6>
      </div>
      <div style={{ fontSize: "12px" }} className="container text-center m-5 uiverse-product">
        <h3>The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row mt-5 justify-content-around">
          <div className="col-3">
            <a href="https://www.zerodhafundhouse.com/">
              <img
                style={{ width: "60%", paddingBottom: "1rem" }}
                src="/media/images/zerodhaFundhouse.png"
                alt=""
              />
              <p>
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </a>
          </div>
          <div className="col-3">
            <a href="https://sensibull.com/">
              <img
                style={{ width: "60%", paddingBottom: "1rem" }}
                src="/media/images/sensibullLogo.svg"
                alt=""
              />
              <p>
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </a>
          </div>
          <div className="col-3">
            <a href="https://goldenpi.com/">
              <img
                style={{ width: "60%", paddingBottom: "1rem" }}
                src="/media/images/goldenpiLogo.png"
                alt=""
              />
              <p>Bond & fixed-income investment platform</p>
            </a>
          </div>
        </div>
        <div className="row mt-5 justify-content-around">
          <div className="col-3">
            <a href="https://www.streak.tech/home">
              <img
                style={{ width: "60%", paddingBottom: "1rem" }}
                src="/media/images/streakLogo.png"
                alt=""
              />
              <p>
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </a>
          </div>
          <div className="col-3">
            <a href="https://smallcase.zerodha.com/">
              <img
                style={{ width: "60%", paddingBottom: "1rem" }}
                src="/media/images/smallcaseLogo.png"
                alt=""
              />
              <p>
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </a>
          </div>
          <div className="col-3">
            <a href="https://joinditto.in/">
              <img
                style={{ width: "40%", paddingBottom: "1rem" }}
                src="/media/images/dittoLogo.png"
                alt=""
              />
              <p>
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
