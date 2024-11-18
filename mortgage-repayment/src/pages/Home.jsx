import "./styles.css";
import Calculator from "../components/calculator";
import Results from "../components/results";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Calculator />
        <div className="background-color-results">
          <Results />
        </div>
      </div>
    </div>
  );
};

export default Home;
