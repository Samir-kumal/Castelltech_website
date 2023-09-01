// alertContext.js
import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext(null);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: "success",
    // Message to be displayed, can be any string
    message: "",
  });

  const onOpen = (type, message) => {
    setState({ isOpen: true, type, message });
  };

  const onClose = () => {
    setState({ isOpen: false, type: "", message: "" });
  };

  return (
    <AlertContext.Provider value={{ ...state, onOpen, onClose }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};
