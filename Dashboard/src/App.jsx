import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Verify from "./components/Verify";
import Forgot from "./components/Forgot";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/forgotPass" element={<Forgot />} />
            <Route path="/verifyOtp" element={<Verify />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>
  );
}

export default App;
