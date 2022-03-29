const UpdateResult = (response, setResult) => {
    if (!response.hasOwnProperty("sum")) {
      const singlearray = [];
      singlearray[0] = response.prime;
      setResult(singlearray);
    } else {
      const sumarray = [];
      sumarray[0] = response.prime;
      sumarray[1] = response.sum;
      setResult(sumarray);
    }
  };

  export default UpdateResult