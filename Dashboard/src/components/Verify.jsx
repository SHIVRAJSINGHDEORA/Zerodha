import { useEffect, useState } from "react";
import "./styles/Auth.css";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function Verify() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(120); //  seconds;
  const email = sessionStorage.getItem("email"); //session storage

  if (!email) {
    navigate("/forgotPass");
  }

  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const min = Math.floor(time / 60);
  const sec = time % 60;

  const handleOtpInput = (e) => {
    setOtp(e.target.value);
  };

  const handleSuccess = (msg) => {
    toast.success(msg, { position: "top-right" });
  };

  const handleError = (err) => {
    toast.error(err, { position: "bottom-left" });
  };

  const resendOtp = async () => {
    setTime(10);

    try {
      const data = await axios.post(
        "http://localhost:8080/send-otp",
        { email: email, username: "" },
        { withCredentials: true },
      );

      const { message, success } = data.data;

      if (success) {
        handleSuccess(message);
      } else {
        handleError(message);
        navigate("/forgotPass");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!otp) {
        handleError("Enter sent OTP !");
        return;
      }

      if (otp.length != 6) {
        handleError("Incorrect or Expired !!");
        return;
      }

      const data = await axios.post(
        "http://localhost:8080/verify-otp",
        { otp: otp, email: email },
        { withCredentials: true },
      );

      const { message, success } = data.data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/resetPassword");
        }, 3000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="body">
        <div className="form-container">
          <div className="otp-header">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h3 className="forgot-text">Email Verify</h3>
            <p className="header-text">
              Please enter varification code we sent to {email}
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="otp-container">
              <input type="number" value={otp} onChange={handleOtpInput} />
            </div>
            <div className="otp-action">
              <div className="resend-btn">
                <button
                  className="resend-btn"
                  disabled={sec > 0 || min > 0}
                  style={{ color: min > 0 || sec > 0 ? "grey" : "red" }}
                  onClick={resendOtp}
                >
                  resend
                </button>
              </div>
              <div className="clock">
                <span>{min < 10 ? `0${min}` : min}</span>
                <span>:</span>
                <span>{sec < 10 ? `0${sec}` : sec}</span>
              </div>
            </div>
            <button className="btn">Verify</button>
          </form>
          <Toaster />
        </div>
      </div>
    </>
  );
}
