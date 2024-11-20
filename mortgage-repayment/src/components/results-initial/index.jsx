import { useContext } from "react";
import "./styles.css";
import { DataContext } from "../../context";
import IllustrationEmpty from "../../assets/illustration-empty.svg";
const ResultsInitial = () => {
  return (
    <div className="container-results-initial">
      <img src={IllustrationEmpty} alt="" />

      <h3 className="container-results-title-initial">Results Shown Here</h3>

      <p className="container-results-paragraph-initial">
        Complete the form and click "calculate repayments to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};

export default ResultsInitial;
