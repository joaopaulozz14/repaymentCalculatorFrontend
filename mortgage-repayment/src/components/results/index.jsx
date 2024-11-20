import { useContext } from "react";
import "./styles.css";
import { DataContext } from "../../context";

const Results = () => {
  const { payment, totalPayment } = useContext(DataContext);

  return (
    <div className="container-results">
      <h2 className="container-results-title">Your results</h2>

      <p className="container-results-paragraph">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>

      <div className="container-results-informations">
        <div className="container-results-informations-nums">
          <p>Your monthly repayments</p>
          <h1>&pound;{payment}</h1>
        </div>
        <span className="line"></span>
        <div className="container-results-informations-nums">
          <p>Total you'll repay over the team</p>
          <h3>${totalPayment}</h3>
        </div>
      </div>
    </div>
  );
};

export default Results;
