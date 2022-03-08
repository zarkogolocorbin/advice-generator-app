import React, { useState, useEffect } from "react";
import axios from "axios";

// import images
import desktopPause from "./images/pattern-divider-desktop.svg";
import mobilePause from "./images/pattern-divider-mobile.svg";
import diceIcon from "./images/icon-dice.svg";

// import css file
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  function fetchData() {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      const data = res.data;
      setAdvice(data.slip);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {advice && (
        <div className="advice">
          <p>ADVICE # {advice.id}</p>
          <h1>{advice.advice}</h1>
        </div>
      )}
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopPause} />
        <img src={mobilePause} alt="" />
      </picture>
      <button onClick={fetchData}>
        <img src={diceIcon} alt="dice icon" />
      </button>
    </div>
  );
}

export default App;
