import "./App.css";
import NavBar from "./components/NavBar";
import TextFrom from "./components/TextFrom";
import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";

import { Routes, Route } from "react-router-dom";

function App() {
  // dark mode on off
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert(": light mode has been enable", "success ");

      // To change title dynamically
      document.title = " TexEdit - LightMode";

      // To flicker titles
      // setInterval(() => {
      //     document.title = "TextEdit - Home";
      // }, 1500)
      // setInterval(() => {
      //     document.title = "va8bp";
      // }, 1000)
    } else {
      document.body.style.backgroundColor = "#2c2556";
      setMode("dark");
      showAlert(": Dark mode has been enable", "success");
      // To change title dynamically
      document.title = "TexEdit - DarkMode";
    }
  };

  //Alert Logic
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 4100);
  };
  //End Of alert logic

  return (
    <>
      <NavBar
        Title="TextEditor"
        About="About us"
        mode={mode}
        toggleMod={toggleMode}
      />
      <Alert alert={alert} />

      <Routes>
        <Route
          exect
          path="/"
          element={
            <TextForm
              heading="Enter your text to analyse"
              style={toggleMode}
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route exect path="/about" element={<About mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
