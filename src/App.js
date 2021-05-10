import React, { useState, useEffect } from "react";
import "./styles/App.scss";

import Phrase from "./components/Phrase";

function App() {
  //state
  const [phrase, setPhrase] = useState({});

  const requireToAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );

    const phrase = await api.json();

    setPhrase(phrase[0]);
  };

  //loading phrase
  useEffect(() => {
    requireToAPI();
  }, []);

  return (
    <div className="main">
      <div className="phrase-container">
        <Phrase phrase={phrase} />
      </div>

      <div className="button-container">
        <button onClick={requireToAPI} className="btn">Get Phrase</button>
      </div>

    </div>
  );
}

export default App;
