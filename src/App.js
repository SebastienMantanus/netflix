import "./App.css";
import movies from "./movies_rnexgr.json";
// import Section from "./components/Section";
import logo from "../src/logo_netflix.png";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header>
        <img alt="logo" src={logo} />
      </header>
      <main>
        {movies.map((element, index) => {
          // console.log(element.category);
          return (
            <Section
              key={index}
              category={element.category}
              pictures={element.images}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
