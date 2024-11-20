import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [payment, setPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);
  const [inputYears, setInputYears] = useState(0);
  const [inputInterest, setInputInterest] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedMortgageType, setSelectedMortgageType] = useState("");
  const [errors, setErrors] = useState({
    input1: false,
    input2: false,
    input3: false,
    input4: false,
  });

  function mortgageCalc() {
    let deal = handleError();
    if (deal) {
      return;
    } else {
      setErrors({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
      });
    }

    let parcela = 0;
    let total = 0;
    let taxaMensal = inputInterest / 100 / 12;
    let qtdMeses = inputYears * 12;

    parcela =
      inputAmount *
      ((taxaMensal * Math.pow(1 + taxaMensal, qtdMeses)) /
        (Math.pow(1 + taxaMensal, qtdMeses) - 1));

    total = parcela * qtdMeses;

    setShowResults(true);
    setPayment(parcela.toFixed(2));
    setTotalPayment(total.toFixed(2));

    return;
  }

  function handleError() {
    let manageError = false;
    console.log(inputAmount, inputYears, inputInterest);

    if (inputAmount == 0 || isNaN(inputAmount)) {
      setErrors((prev) => ({ ...prev, input1: true }));
      manageError = true;
    } else {
      setErrors((prev) => ({ ...prev, input1: false }));
    }
    if (inputYears == 0 || isNaN(inputYears)) {
      setErrors((prev) => ({ ...prev, input2: true }));
      manageError = true;
    } else {
      setErrors((prev) => ({ ...prev, input2: false }));
    }

    if (inputInterest == 0 || isNaN(inputInterest)) {
      setErrors((prev) => ({ ...prev, input3: true }));
      manageError = true;
    } else {
      setErrors((prev) => ({ ...prev, input3: false }));
    }
    if (selectedMortgageType == "") {
      setErrors((prev) => ({ ...prev, input4: true }));
      manageError = true;
    } else {
      setErrors((prev) => ({ ...prev, input4: false }));
    }

    return manageError;
  }
  return (
    <DataContext.Provider
      value={{
        payment,
        totalPayment,
        mortgageCalc,
        showResults,
        inputAmount,
        inputYears,
        inputInterest,
        errors,
        selectedMortgageType,
        setInputAmount,
        setInputInterest,
        setInputYears,
        setErrors,
        setSelectedMortgageType,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
