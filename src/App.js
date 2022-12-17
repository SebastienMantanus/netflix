import "./App.css";
import Movies from "./movies_rnexgr.json";
// import Section from "./components/Section";
import logo from "../src/logo_netflix.png";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header>
        <img alt="logo" src={logo} />
      </header>
      <section>
        {Movies.map((element, index) => {
          // console.log(element.category);
          return (
            <Section
              key={index}
              category={element.category}
              pictures={element.images}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
