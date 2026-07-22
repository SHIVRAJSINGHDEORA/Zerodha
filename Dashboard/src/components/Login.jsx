import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./styles/Auth.css";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [inputvalue, setInputvalue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [show, setShow] = useState(false);
  const { email, password, username } = inputvalue;

  let handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputvalue({ ...inputvalue, [name]: value });
  };

  const handdleSuccess = (message) => {
    toast.success(message, { position: "top-right" });
  };

  const handleError = (error) => {
    toast.error(error, { position: "bottom-left" });
  };

  const handleShowPass = () => {
    setShow(!show);
  };

  const handleGuest = () => {
    setInputvalue({email : "guestaccount@123gmail.com" , username : "guest123", password : "f39bv.Kqwqb8Qre@"})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((!email && !username) || !password) {
      handleError("All fields are required!");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8080/login",
        { ...inputvalue },
        { withCredentials: true },
      );


      if (data.success) {
        handdleSuccess(data.message);
        setTimeout(() => navigate("/"), 1000);
      } else {
        handleError(data.message);
      }
    } catch (err) {
      console.log(err.message);
    }

    setInputvalue({ ...inputvalue, email: "", password: "", username: "" });
  };

  return (
    <>
      <div className="body">
        <div className="form-container">
          <h2>Login</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                placeholder="example@gmail.com.."
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleInputChange}
              />
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="break-line">
              <div className="break-body">
                <div></div>
                <p className="break-text">or</p>
                <div></div>
              </div>
            </div>
            <div className="field">
              <label htmlFor="username">Username</label>
              <br />
              <input
                type="text"
                placeholder="@crazy_hero"
                name="username"
                autoComplete="nickname"
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type={show ? "text" : "password"}
                placeholder=""
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={handleInputChange}
              />
              <i
                className={`fa-solid ${show ? "fa-eye" : "fa-eye-slash"}`}
                onClick={handleShowPass}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="forgot">
              <Link to="/forgotPass">Forgot Password ?</Link>
            </div>
            <button className="btn" type="submit">
              Login
            </button>
            <div className="break-line">
              <div className="break-body">
                <div></div>
                <p className="break-text">or</p>
                <div></div>
              </div>
            </div>
            <button className="btn-guest" type="submit" onClick={handleGuest}>
              Guest Account
            </button>
          </form>
          <Toaster />
          <p>
            Don't have an account? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </>
  );
}
