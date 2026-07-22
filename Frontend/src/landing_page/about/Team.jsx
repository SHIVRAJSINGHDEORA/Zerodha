import { Link } from "react-router-dom";
export default function Team() {
  return (
    <>
    <div className="container">
      <div style={{ padding: "60px", lineHeight: "1.9rem" }} className="row ">
        <div className="col p-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="https://rainmatter.com/">Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
      <h3 className="text-center">People</h3>
      <div className="row py-5">
        <div className="col-4 offset-2">
          <img
            className="rounded-circle img-fluid"
            width="300"
            height="300"
            src="/media/images/nithinKamath.jpg"
            alt="co-founder images"
          />
        </div>
        <div className="col ">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <Link to="/">HomePage</Link> / <Link to="/support"> TradingQ&A</Link> /<a href="https://www.x.com/zerodha"> Twitter</a></p>
        </div>
        <div className="col-1"></div>
      </div>
      </div>
    </>
  );
}
