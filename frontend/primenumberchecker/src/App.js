import React, { useState } from "react";
import primesService from "./services/primes";
import UpdateResult from "./components/UpdateResult";
import ShowResults from "./components/ShowResults";
import PrimeNumberInput from "./components/PrimeNumberInput";


const App = () => {
  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState([]);

  const handleNumberChange = (event) => {
    setNumbers(event.target.value);
  };

  const checkNumbers = (event) => {
    event.preventDefault();
    if (numbers.includes(",")) {
      primesService
        .getMultipleNums(numbers)
        .then((response) => {
          UpdateResult(response, setResult, result);
        })
        .catch((error) => {
          //log the error using a logger
        });
    } else {
      const singledigit = parseInt(numbers);
      primesService
        .getOne(singledigit)
        .then((response) => {
          UpdateResult(response, setResult, result);
        })
        .catch((error) => {
          //log the error using a logger
        });
    }
  };

  return (
    <>
      <h1>Prime number checker</h1>
      <PrimeNumberInput
        numbers={numbers}
        handleNumberChange={handleNumberChange}
        checkNumbers={checkNumbers}
      />
      <ShowResults result={result} />
    </>
  );
};

export default App;