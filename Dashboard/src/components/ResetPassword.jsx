import axios from "axios";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./styles/Auth.css";

export default function ResetPassword() {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  const [inputvalue, setInputvalue] = useState({
    password: "",
    newPass: "",
  });
  const [show, setShow] = useState({
    newPass: false,
    password: false,
  });

  const [passStyle, setStyle] = useState({ newPass: {}, pass: {} });

  const { newPass, password } = inputvalue;

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/reset`,
          {},
          { withCredentials: true },
        );

        const { status } = data;
        

        if (!status) {
          navigate("/forgotPass");
        }
      } catch (err) {
        const message = err.response?.data.message || "Something went wrong !";
        handleError(message);
        
        if (err.response?.status === 401) {
          setTimeout(() => {
            navigate("/forgotPass");
          }, 3000);
        }
        console.log(err.message);
      }
    };

    verifyCookie();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputvalue({ ...inputvalue, [name]: value });
  };

  const handleShowPass = (val) => {
    if (val == "newPass") {
      setShow((prev) => {
        return { ...show, newPass: !prev.newPass };
      });
    } else {
      setShow((prev) => {
        return { ...show, password: !prev.password };
      });
    }
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
      if (!newPass || !password) {
        handleError("All fields required!");
        return;
      }
      let nextStyles = { ...passStyle };
      const valid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(newPass);

      if (!valid) {
        nextStyles.newPass = { borderColor: "red" };
        nextStyles.pass = { borderColor: "red" };

        setStyle(nextStyles);
        handleError("Use Strong Password");
        return;
      }

      nextStyles.newPass = { borderColor: "green" };

      if (password != newPass) {
        nextStyles.pass = { borderColor: "red" };
        setStyle(nextStyles);
        handleError("Please Confirm Password !");
        return;
      }

      nextStyles.pass = { borderColor: "green" };
      setStyle(nextStyles);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/reset-pass`,
        {
          email: email,
          newPass: newPass,
        },
        { withCredentials: true },
      );

      const { message, success } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        handleError(message);
      }
    } catch (err) {
      const message = err.response?.data.message || "Something went wrong !";

      handleError(message);
      if (err.response?.status === 401) {
        setTimeout(() => {
          navigate("/forgotPass");
        }, 3000);
      }
    }
  };

  return (
    <>
      <div className="body">
        <div className="form-container">
          <h2>Reset Password</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="password">Password</label>
              <br />
              <div className="warn">
                *Password must contain 8 characters, one uppercase letter, one
                number and one special character
              </div>
              <input
                type={show.newPass ? "text" : "password"}
                placeholder="Use strong password"
                name="newPass"
                autoComplete="new-password"
                value={newPass}
                onChange={handleInputChange}
                style={passStyle.newPass}
              />
              <i
                className={`pass fa-solid ${show.newPass ? "fa-eye" : "fa-eye-slash"}`}
                style={{ cursor: "pointer" }}
                onClick={() => handleShowPass("newPass")}
              ></i>
            </div>
            <div className="field">
              <label htmlFor="password">Confirm new Password</label>
              <br />
              <input
                type={show.password ? "text" : "password"}
                placeholder="Use strong password"
                name="password"
                autoComplete="new-password"
                value={password}
                onChange={handleInputChange}
                style={passStyle.pass}
              />
              <i
                className={`new-pass fa-solid ${show.password ? "fa-eye" : "fa-eye-slash"}`}
                style={{ cursor: "pointer" }}
                onClick={handleShowPass}
              ></i>
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
          <Toaster />
        </div>
      </div>
    </>
  );
}
