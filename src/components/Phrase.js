import React from "react";

import "../styles/Phrase.scss" 


const Phrase = ({ phrase }) => {
  // if(Object.keys(phrase).length === 0 )return null
  return (
    <div className="phrase-container">
      <h1 className="quote">{phrase.quote}</h1>
      <p className="author">{phrase.author}</p>
    </div>
  );
};

export default Phrase;
