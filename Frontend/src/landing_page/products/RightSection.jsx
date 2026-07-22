import { Link } from "react-router-dom";
export default function RightSection({
  prductImage,
  productName,
  productDesc,
  tryDemo,
  learn,
  playStore,
  appStore,
}) {
  return (
    <>
      <div className="container">
        <div className="row p-5">
          <div
            style={{ lineHeight: "1.9rem", fontSize: "1rem" }}
            className="col  d-flex flex-column justify-content-center"
          >
            <h4>{productName}</h4>
            <p>{productDesc}</p>
            <div className="row">
              <div className="col">
                <Link to={tryDemo}>
                  Try Demo <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
              <div className="col">
                <Link to={learn}>
                  Learn more <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <a href="">
                  <img src={playStore} alt="play store" />
                </a>
              </div>
              <div className="col">
                <a href="">
                  <img src={appStore} alt="app store" />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <img src={prductImage} alt="product image" />
          </div>
        </div>
      </div>
    </>
  );
}
