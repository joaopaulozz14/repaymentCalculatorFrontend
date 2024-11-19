import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [payment, setPayment] = useState();
  const [inputAmount, setInputAmount] = useState(0);
  const [inputYears, setInputYears] = useState(0);
  const [inputInterest, setInputInterest] = useState(0);

  function mortgageCalc() {
    let parcela = 0;
    let taxaMensal = inputInterest / 100 / 12;
    let qtdMeses = inputYears * 12;

    parcela =
      inputAmount *
      ((taxaMensal * Math.pow(1 + taxaMensal, qtdMeses)) /
        (Math.pow(1 + taxaMensal, qtdMeses) - 1));

    setPayment(parcela.toFixed(2));
    return;
  }

  useEffect(() => {
    mortgageCalc();
  }, []);
  return (
    <DataContext.Provider
      value={{
        payment,
        mortgageCalc,
        inputAmount,
        inputYears,
        inputInterest,
        setInputAmount,
        setInputInterest,
        setInputYears,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
