import React, { createContext, useState } from "react";
import Window from "./Window";

export const  GeneralContext = React.createContext({
  OpenWindow: (uid) => {},
  CloseWindow: () => {},
});

export default function GeneralContextProvider  (props)  {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [stockID, setStockID] = useState("");
  const [id, setID] = useState("");

  const OpenWindow = (uid,id) => {
    setIsWindowOpen(true);
    setStockID(uid);
    setID(id);
  };

  const CloseWindow = () => {
    setIsWindowOpen(false);
  };

  return (
    <>
      <GeneralContext.Provider value={{ OpenWindow, CloseWindow }}>
        {props.children}
        {isWindowOpen && <Window uid = {stockID} id={id}/>}
      </GeneralContext.Provider>
    </>
  );
};


