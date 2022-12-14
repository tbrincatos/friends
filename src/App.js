import axios from "axios";
import React, { useState } from "react";

import "./App.css";

export default function App() {
  let [content, setContent] = useState("");
  function handleResponse(response) {
    setContent({
      quote: response.data.quote,
      character: response.data.character,
    });
  }
  function searchQuote() {
    let apiUrl = `https://friends-quotes-api.herokuapp.com/quotes/random`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleClick(event) {
    event.preventDefault();
    searchQuote();
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Friends</h1>
      </div>
      <h2>Guess who said it?</h2>
      <div className="quote">{content.quote}</div>
      <div className="character">{content.character}</div>
      <div className="footer">
        <button onClick={handleClick}>Get quote</button>
      </div>
    </div>
  );
}
