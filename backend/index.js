const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.static('build'))
app.use(express.json());
app.use(cors());

app.get("/api/singleprime/:number", (request, response) => {
  const number = Number(request.params.number);
  const result = {
    prime: isPrimeNumber(number),
  };
  response.json(result);
});

app.get("/api/multiplenumbers/:numbers", (request, response) => {
  const numbers = request.params.numbers;
  const numericList = numbers.split(",").map(Number);
  const length = numericList.length;
  var sum = null;
  for (let i = 0; i < length; i++) {
    sum = sum + numericList[i];
  }

  const result = {
    prime: isPrimeNumber(sum),
    sum: sum,
  };
  response.json(result);
});

function isPrimeNumber(numbertocheck) {
  if (numbertocheck === 0 || numbertocheck === 1) {
    return false;
  } else if (numbertocheck === 2) {
    return true;
  } else {
    for (var x = 2; x < numbertocheck; x++) {
      if (numbertocheck % x === 0) {
        return false;
      }
    }
    return true;
  }
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
});