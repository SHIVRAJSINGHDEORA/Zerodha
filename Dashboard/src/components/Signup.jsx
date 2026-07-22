import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./styles/Auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const [inputvalue, setInputvalue] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [passStyle, setStyle] = useState({});

  const { email, username, password } = inputvalue;

  let handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputvalue({ ...inputvalue, [name]: value });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "top-right",
    });
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleShowPass = () => {
    setShow(!show);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      handleError("All feilds are required !");
      return;
    }

    const valid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password);

    if (!valid) {
      setStyle({ borderColor: "red" });
      handleError("Use Strong Password");
      return;
    } else {
      setStyle({ borderColor: "green" });
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/signup`,
        { ...inputvalue },
        { withCredentials: true },
      );

      const { message, success } = data;
      

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setStyle({});
    }

    setInputvalue({ ...inputvalue, email: "", username: "", password: "" });
  };

  return (
    <>
      <div className="body">
        <div className="form-container">
          <h2>Sign Up</h2>
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
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <br />
              <div className="warn">
                *Password must contain 8 characters, one uppercase letter, one
                number and one special character
              </div>
              <input
                type={show ? "text" : "password"}
                placeholder="Use strong password"
                name="password"
                autoComplete="new-password"
                value={password}
                onChange={handleInputChange}
                style={passStyle}
              />
              <i
                className={`pass fa-solid ${show ? "fa-eye" : "fa-eye-slash"}`}
                style={{ cursor: "pointer" }}
                onClick={handleShowPass}
              ></i>
            </div>
            <button className="btn" type="submit">
              Sign up
            </button>
          </form>
          <Toaster />
          <p>
            Create an account or <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
}
