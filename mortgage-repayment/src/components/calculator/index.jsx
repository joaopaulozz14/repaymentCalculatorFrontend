import Button from "../button";
import "./styles.css";

const Calculator = () => {
  return (
    <div className="container-calculator">
      <div className="title">
        <h3>Mortgage Calculator</h3>
        <p>Clear All</p>
      </div>
      {/** title****************/}

      <div className="mortgage-amount-container">
        <p>Mortgage Amount</p>
        <div className="input-amount input-general">
          <p>&pound;</p>{" "}
          <input className="input-general" type="text" placeholder="$3000" />
        </div>
      </div>
      {/***mortgage-amount-container******/}

      <div className="input-term-and-rate">
        <div>
          <p>Mortgage Term</p>
          <div className="input-term input-general">
            <input className="input-general" type="text" placeholder="25" />
            <p>years</p>
          </div>
        </div>

        <div>
          <p>Interest Rate</p>
          <div className="input-rate ">
            <input className="input-general" type="text" placeholder="5.25" />
            <p>%</p>
          </div>
        </div>
      </div>
      {/**input-term-and-rate ****************/}

      <div className="input-repayment-and-interest">
        <p>Mortgage Type</p>
        <div className="wrap-input">
          <input
            type="radio"
            id="repayment"
            value="repayment"
            className="input-repayment"
          />
          <label for="repayment">Repayment</label>
        </div>
        <div className="wrap-input">
          <input type="radio" id="interest" value="Interest Only" />
          <label for="interest">Interest Only</label>
        </div>
      </div>
      {/** input-repayment-and-interest*************/}

      <Button />
    </div>
  );
};

export default Calculator;
