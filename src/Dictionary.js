import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary(props) {
  let [searched, setSearched] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searched}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApi = "563492ad6f91700001000001a0f606cc3da84bb29accba94c75e1169";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${searched}&per_page=8`;
    let headers = { Authorization: `Bearer ${pexelsApi}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearched(event) {
    setSearched(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleSearched}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Search for words that you want a definition for...bee, moonlight,
            nail...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
