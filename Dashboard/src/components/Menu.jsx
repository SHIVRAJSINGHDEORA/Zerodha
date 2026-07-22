import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Menu.css";
import axios from "axios";

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const navigate = useNavigate();

  let handdleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  let handdleProfileMenu = () => {
    setIsProfileActive(!isProfileActive);
  };

  let handleLogout = async () => {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/logout`,
      {},
      {
        withCredentials: true,
      },
    );
    navigate("/login");
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => {
                handdleMenuClick(0);
              }}
            >
              <p className={`${selectedMenu === 0 ? "menu selected" : "menu"}`}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handdleMenuClick(1)}
            >
              <p className={`${selectedMenu === 1 ? "menu selected" : "menu"}`}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handdleMenuClick(2)}
            >
              <p className={`${selectedMenu === 2 ? "menu selected" : "menu"}`}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handdleMenuClick(3)}
            >
              <p className={`${selectedMenu === 3 ? "menu selected" : "menu"}`}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handdleMenuClick(4)}
            >
              <p className={`${selectedMenu === 4 ? "menu selected" : "menu"}`}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handdleMenuClick(5)}
            >
              <p className={`${selectedMenu === 5 ? "menu selected" : "menu"}`}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handdleProfileMenu}>
          <div className="avatar">
            <i class="fa-solid fa-user"></i>
          </div>
          <button className="btn-log" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
