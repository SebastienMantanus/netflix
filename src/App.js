import "./App.css";
import Movies from "./movies_rnexgr.json";
import Section from "./components/Section";
import logo from "../src/logo_netflix.png";

function App() {
  return (
    <div>
      <header>
        <img alt="logo" src={logo} />
      </header>
      <Section />
    </div>
  );
}

export default App;
