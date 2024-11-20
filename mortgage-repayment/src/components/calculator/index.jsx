import { useContext, useEffect, useState } from "react";
import Button from "../button";
import "./styles.css";
import { DataContext } from "../../context";

const Calculator = () => {
  const {
    setInputAmount,
    setInputInterest,
    setInputYears,
    errors,
    selectedMortgageType,
    setSelectedMortgageType,
  } = useContext(DataContext);

  const handleChangeAmount = (e) => {
    setInputAmount(parseFloat(e.target.value));
  };

  const handleChangeYears = (e) => {
    setInputYears(parseFloat(e.target.value));
  };

  const handleInputInterest = (e) => {
    setInputInterest(parseFloat(e.target.value));
  };
  const handleRadioChange = (e) => {
    setSelectedMortgageType(e.target.value);
    console.log(typeof selectedMortgageType);
    
  };

  return (
    <div className="container-calculator">
      <div className="title">
        <h3>Mortgage Calculator</h3>
        <p>Clear All</p>
      </div>
      {/** title****************/}

      <div className="mortgage-amount-container">
        <p>Mortgage Amount</p>
        <div
          className={`input-amount input-general-size ${
            errors.input1 ? "error" : ""
          } `}
        >
          <p>&pound;</p>
          <input
            className="input-general-size"
            type="number"
            onChange={handleChangeAmount}
            min={0}
          />
        </div>
        {errors.input1 ? (
          <div className="error-message">This field is required</div>
        ) : (
          ""
        )}
      </div>
      {/***mortgage-amount-container******/}

      <div className="input-term-and-rate">
        <div>
          <p>Mortgage Term</p>
          <div
            className={`input-term input-general-size ${
              errors.input2 ? "error" : ""
            }`}
          >
            <input
              className={`input-general-size`}
              type="number"
              onChange={handleChangeYears}
              min={0}
            />
            <p>years</p>
          </div>
          {errors.input2 ? (
            <div className="error-message">This field is required</div>
          ) : (
            ""
          )}
        </div>

        <div>
          <p>Interest Rate</p>
          <div className={`input-rate ${errors.input3 ? "error" : ""}`}>
            <input
              className={`input-general-size `}
              type="number"
              onChange={handleInputInterest}
            />
            <p>%</p>
          </div>
          {errors.input3 ? (
            <div className="error-message">This field is required</div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/**input-term-and-rate ****************/}

      <form className="input-repayment-and-interest">
        <p>Mortgage Type</p>
        <div className={"wrap-input"}>
          <input
            type="radio"
            id="repayment"
            value="repayment"
            name="repayment-and-interest"
            className="input-type"
            onChange={handleRadioChange}
            min={0}
          />
          <label for="repayment">Repayment</label>
        </div>
        <div className="wrap-input">
          <input
            type="radio"
            id="interest"
            name="repayment-and-interest"
            value="interest-only"
            onChange={handleRadioChange}
            className="input-type"
          />
          <label for="interest">Interest Only</label>
        </div>
        {errors.input4 ? (
          <div className="error-message">This field is required</div>
        ) : (
          ""
        )}
      </form>
      {/** input-repayment-and-interest*************/}

      <Button />
    </div>
  );
};

export default Calculator;
