import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [searched, setSearched] = useState(null);

  function handleResponse(response) {}

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
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleSearched} />
      </form>
    </div>
  );
}
