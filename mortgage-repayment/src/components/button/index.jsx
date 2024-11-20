import "./styles.css";
import calculator from "../../assets/icon-calculator.svg";
import { useContext } from "react";
import { DataContext } from "../../context";
import IconCalculator from "../../assets/icon-calculator.svg";

const Button = () => {
  const { mortgageCalc } = useContext(DataContext);
  function handleSubmit() {
    mortgageCalc();
  }
  return (
    <button onClick={handleSubmit}>
      <img src={IconCalculator} alt="calculator icon" />
      Calculate Repayments
    </button>
  );
};
export default Button;
