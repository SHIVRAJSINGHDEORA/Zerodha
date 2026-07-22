export default function Hero() {
  return (
    <div className="container mb-5">
      <div className="row">
        <img className="mb-5" src="/media/images/homeHero.png" alt="Hero Image" />
        <div className="mt-5  text-center">
          <h1>Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button type="button" className="btn btn-primary px-5 fs-5">
            SignUp for Free
          </button>
        </div>
      </div>
    </div>
  );
}
