import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [searched, setSearched] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searched}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearched(event) {
    setSearched(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input type="search" autoFocus={true} onChange={handleSearched} />
        </form>
        <div className="hint">
          Search for words that you want a definition for...bee, moonlight,
          nail...
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
