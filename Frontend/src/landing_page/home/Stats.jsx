export default function Stats() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <h1>Trust with confidence</h1>
          <h4>Customer-first always</h4>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h4>No spam or gimmicks</h4>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h4>The Zerodha universe</h4>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4>Do better with money</h4>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img
            style={{ width: "100%" }}
            src="/media/images/ecosystem.png"
            alt=""
          />
          <div className="d-flex gap-5">
            <a style={{ textDecoration: "none" }} href="/">
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a style={{ textDecoration: "none" }} href="/">
              Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
      <img
        style={{ width: "100%", marginTop: "2rem" }}
        src="/media/images/pressLogos.png"
        alt="Press Logos"
      />
    </div>
  );
}
