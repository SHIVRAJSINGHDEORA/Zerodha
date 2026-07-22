import OpenAccount from "../OpenAccount";

const apps = [
  {
    name: "Kite",
    text: "Trading Platform",
    url: "https://kite.zerodha.com/",
    image: "/media/images/kite-logo.svg",
  },
  {
    name: "Console",
    text: "Backoffice",
    url: "https://console.zerodha.com/",
    image: "/media/images/console.svg",
  },
  {
    name: "Kite Connect",
    text: "Trading APIs",
    url: "https://kite.trade/",
    image: "/media/images/kite-connect.svg",
  },
  {
    name: "Coin",
    text: "Mutual Funds",
    url: "https://coin.zerodha.com/",
    image: "/media/images/coin.svg",
  },
];

export default function Hero() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-6 fw-bold mb-3">Support</h1>
          <p className="text-muted mb-0">
            Need help with account opening, trading, or payments? We’ve kept the
            support experience simple and easy to reach.
          </p>
        </div>
        <div className="col-lg-5">
          <OpenAccount />
        </div>
      </div>

      <div className="mt-4">
        <h4 className="mb-3">Other apps</h4>
        <div className="row g-3">
          {apps.map((app) => (
            <div className="col-sm-6 col-lg-3" key={app.name}>
              <a
                href={app.url}
                target="_blank"
                rel="noreferrer"
                className="d-flex flex-column align-items-center justify-content-center text-decoration-none text-dark border rounded p-3 h-100"
                style={{ minHeight: "140px" }}
              >
                <img
                  src={app.image}
                  alt={`${app.name} logo`}
                  style={{ height: "48px", marginBottom: "12px" }}
                />
                <div className="fw-bold">{app.name}</div>
                <div className="text-muted small">{app.text}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
