import "./App.css";
// import img from "./assets/react.svg";
import Card from "./components/Card";
import data from "./data/data.json";

function App() {
  return (
    <>
      <div className="App">
        <div className="main">
          {data.map((data) => (
            <Card
              key={data.id}
              language={data.language}
              author={data.author}
              title={data.title}
              link={data.link}
              pages={data.pages}
              year={data.year}
              country={data.country}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
