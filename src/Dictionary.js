import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searched, setSearched] = useState(null);

  function search(event) {
    event.preventDefault();
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
