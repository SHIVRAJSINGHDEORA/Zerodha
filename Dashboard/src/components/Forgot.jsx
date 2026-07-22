import { useState } from "react";
import "./styles/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function Forgot() {
  const navigate = useNavigate();
  const [inputvalue, setInputvalue] = useState({
    email: "abc@gmail.com",
    username: "",
  });

  const { email, username } = inputvalue;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputvalue({ ...inputvalue, [name]: value });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, { position: "top-right" });
  };

  const handleError = (err) => {
    toast.error(err, { position: "bottom-left" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  
      if (!email && !username) {
        handleError("Enter email or username !");
        return;
      }

      const{ data }= await axios.post(
         `${import.meta.env.VITE_API_URL}/send-otp`,
        { ...inputvalue },
        { withCredentials: true },
      );

      const { success, message } = data;
      const currEmail = data.email;

      if (success) {
        handleSuccess(message);
        sessionStorage.setItem("email", currEmail);
        setTimeout(()=>{
          navigate("/verifyOtp");
        },3000);
      } else {
        handleError(message);
      }

    } catch (err) {
      console.log(err.message);
    }

    setInputvalue({ ...inputvalue, email: "", username: "" });
  };

  return (
    <>
    <div className="body">
      <div className="form-container">
        <h2>Forgot</h2>
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
            <i className="fa-solid fa-user"></i>
            <div className="warn">
              *OTP will going to send through ragistered email !
            </div>
          </div>

          <button className="btn" type="submit">
            Send OTP
          </button>
        </form>
        <Toaster />
        <p>
          Back to <Link to="/login">Sign in</Link>
        </p>
      </div>
      </div>
    </>
  );
}
