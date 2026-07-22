import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import toast, {Toaster} from "react-hot-toast"
import Loding from "./Loading";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const toastShown = useRef(false);

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/",
          {},
          { withCredentials: true },
        );
        const { status, user } = data;
        if (status) {
          sessionStorage.setItem("username", user);
          if (!toastShown.current) {
            toast.success(
              `Hello ${data.user}`,
              { position: "top-right" },
              { autoClose: "10000" },
            );
            toastShown.current = true;
          }
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth error:", error);
        navigate("/login");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    verifyCookie();
  }, []);

 

  return (
    <>
      <Toaster />
      {loading ? (
        <Loding />
      ) : (
        <>
          <TopBar />
          <Dashboard />
        </>
      )}
    </>
  );
}
