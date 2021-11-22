import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <h1>Dictionary</h1>
          <Dictionary />
        </main>
        <footer className="coded-by">
          <small>
            Coded by Carol-Ann Donaldson{" "}
            <a href="https://github.com/cdonal91/dictionary-project">Github</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
