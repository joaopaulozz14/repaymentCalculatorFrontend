import "./styles.css";
import Calculator from "../components/calculator";
import Results from "../components/results";
import { useContext } from "react";
import { DataContext } from "../context";
import ResultsInitial from "../components/results-initial";
const Home = () => {
  const { showResults } = useContext(DataContext);
  return (
    <div className="home">
      <div className="container">
        <Calculator />
        <div className="background-color-results">
          {showResults ? <Results /> : <ResultsInitial />}
        </div>
      </div>
    </div>
  );
};

export default Home;
