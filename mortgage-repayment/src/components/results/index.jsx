import { useContext } from "react";
import "./styles.css";
import { DataContext } from "../../context";

const Results = () => {
  const { payment } = useContext(DataContext);

  return (
    <div className="container-results">
      <h2 className="container-results-title">Your results</h2>

      <p className="container-results-paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
        quibusdam accusantium illum quod alias neque? Sapiente placeat eligendi
        aliquam veritatis nemo beatae, repellendus est vitae, voluptates
        molestiae recusandae itaque vel.
      </p>

      <div className="container-results-informations">
        <div className="container-results-informations-nums">
          <p>Your monthly repayments</p>
          <h1>&pound;{payment}</h1>
        </div>
        <span className="line"></span>
        <div className="container-results-informations-nums">
          <p>Total you'll repay over the team</p>
          <h3>$539,322.94</h3>
        </div>
      </div>
    </div>
  );
};

export default Results;
