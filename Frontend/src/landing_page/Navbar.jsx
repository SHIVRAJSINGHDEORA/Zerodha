import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top border-bottom  px-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              style={{ width: "30%" }}
              src="/media/images/logo.svg"
              alt="logo image"
            />
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav  gap-4">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item  align-self-center">
                <button
                  className="menu-btn"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <i class="fa-solid fa-bars fa-lg"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`mega-menu mx-5 ${toggle ? "active" : ""}`}>
        <div className="row ">
          <div className="col">
            <div className="d-flex flex-column justify-content-center align-items-center text-center toggler-card">
              <Link to="https://kite.zerodha.com/">
                <img src="/media/images/kite-logo.svg" alt="product-image" />
                <div className="product-desc">
                  <div className="product-title">
                    <b>Kite</b>
                  </div>
                  <div className="product-text">Trading Platform</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center text-center toggler-card">
            <Link to="https://console.zerodha.com/">
              <img src="/media/images/console.svg" alt="product-image" />
              <div className="product-desc">
                <div className="product-title">
                  <b>Console</b>
                </div>
                <div className="product-text">Backoffice</div>
              </div>
            </Link>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center text-center toggler-card">
            <Link to="">
              <img src="/media/images/kite-connect.svg" alt="product-image" />
              <div className="product-desc">
                <div className="product-title">
                  <b>Kite-connect</b>
                </div>
                <div className="product-text">Trading APIs</div>
              </div>
            </Link>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center text-center toggler-card">
            <Link to="https://coin.zerodha.com/">
              <img src="/media/images/coin.svg" alt="product-image" />
              <div className="product-desc">
                <div className="product-title">
                  <b>Coin</b>
                </div>
                <div className="product-text">Mutual funds</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
