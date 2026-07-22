export default function Ticket() {
  return (
    <section className="container pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="border rounded p-4">
            <h3 className="mb-3">Contact us</h3>
            <p className="text-muted mb-4">
              For account, trading, or platform-related questions, reach out
              using the details below.
            </p>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:support@zerodha.com">support@zerodha.com</a>
              </li>
              <li>
                <strong>Toll free:</strong>{" "}
                <a href="tel:18004197676">1800 419 7676</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
