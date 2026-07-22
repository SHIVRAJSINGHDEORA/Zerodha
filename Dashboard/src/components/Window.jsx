import React, { useState, useRef, useEffect, useContext } from "react";
import "./styles/Window.css";
import { GeneralContext } from "./GeneralContext";
import axios from "axios";
export default function Window({ uid, id }) {
  const [position, setPosition] = useState({ x: 420, y: 200 });
  const [dragging, setDragging] = useState(false);
  const [qty, setqty] = useState(1);
  const [price, setPrice] = useState(0.05);
  const offset = useRef({ x: 0, y: 0 });

  const divRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (dragging && divRef.current) {
      const divWidth = divRef.current.offsetWidth;
      const divHeight = divRef.current.offsetHeight;
      const maxX = window.innerWidth - divWidth;
      const maxY = window.innerHeight - divHeight;

      const newX = Math.min(Math.max(e.clientX - offset.current.x, 0), maxX);
      const newY = Math.min(Math.max(e.clientY - offset.current.y, 0), maxY);

      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const generalContext = useContext(GeneralContext);

  let handleWindow = () => {
    generalContext.CloseWindow();
  };

  let handleBuyClick = async () => {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/order`,
      {
        name: uid,
        qty: qty,
        price: price,
        mode: "Buy",
      },
      { withCredentials: true },
    );

    await axios.patch(
      `${import.meta.env.VITE_API_URL}/holdings/buy`,
      {
        name: uid,
        qty: qty,
        price: price,
      },
      { withCredentials: true },
    );

    generalContext.CloseWindow();
  };

  let handleSellClick = async () => {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/order`,
      {
        name: uid,
        qty: qty,
        price: price,
        mode: "Sell",
      },
      { withCredentials: true },
    );

    await axios.patch(
      `${import.meta.env.VITE_API_URL}/holdings/sell`,
      {
        name: uid,
        qty: qty,
        price: price,
      },
      { withCredentials: true },
    );

    generalContext.CloseWindow();
  };
  return (
    <>
      <div
        className="buy-container"
        ref={divRef}
        style={{ left: position.x, top: position.y }}
      >
        <div className={`stock-info ${id}`} onMouseDown={handleMouseDown}>
          {uid}
        </div>
        <div className="stock-feild">
          <div className="feild">
            <label htmlFor="quantity" className="feild-lable">
              Qty.
            </label>
            <br />
            <div className="feild-input">
              <input
                type="number"
                placeholder="Qty."
                min={1}
                step={1}
                value={qty}
                id="quantity"
                onChange={(e) => setqty(e.target.value)}
              />
            </div>
          </div>

          <div className="feild">
            <label htmlFor="price" className="feild-lable">
              Price
            </label>
            <br />
            <div className="feild-input">
              <input
                type="number"
                placeholder="Price"
                min={0.05}
                step={0.05}
                value={price}
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <br />
        </div>
        <div className="stock-btn">
          <br />
          <button
            onClick={id == "buy-option" ? handleBuyClick : handleSellClick}
            className={id == "buy-option" ? "buy-btn" : "sell-btn"}
          >
            {id == "buy-option" ? "Buy" : "Sell"}
          </button>
          <br />
          <button
            onClick={handleWindow}
            style={{ background: "#ffffff40" }}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
