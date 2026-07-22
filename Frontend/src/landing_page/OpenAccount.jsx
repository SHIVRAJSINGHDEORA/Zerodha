export default function OpenAccount() {

  const handleSignup = () =>{
    window.location.href = `${import.meta.env.VITE_DASHBOARD_URL}/signup`;
  }

  const handleLogin = () =>{
    window.location.href = `${import.meta.env.VITE_DASHBOARD_URL}/login`;
  }

  return (
    <div className="text-center p-5 fs-5">
      <h2>Open Zerodha Account</h2>
      <br />
      <p>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <div className="d-flex justify-content-center gap-3 align-items-center">
        <div>
          <button type="button" className="btn btn-primary  fs-5" onClick={handleSignup}>
            SignUp for Free
          </button>
        </div>
        <div style={{width : "1px", height : "4rem", background:"black"}}></div>
        <div className="d-flex align-items-center">
          <p style={{fontSize:"0.8rem",marginRight : "1rem"}}><br/> Alredy have <br /> an account !</p>
          <div>
            <button type="button" className="btn btn-danger  fs-5" onClick={handleLogin}>
            Login
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
