const ShowResults = ({ result }) => {
  if (result.length === 0) {
    return null;
  }
  if (result.length === 1 && result[0] === true) {
    return <p>It's a prime number!</p>
  } else if (result.length === 1 && result[0] === false) {
    return <p>Not a prime number!</p>
  } else if (result.length === 2 && result[0] === true) {
    return (
      <>
        <p>Sum of the numbers is a prime number!</p>
        <p>Sum: {result[1]}</p>
      </>
    );
  } else if (result.length === 2 && result[0] === false) {
    return (
      <>
        <p>Sum of the numbers isn't a prime number!</p>
        <p>Sum: {result[1]}</p>
      </>
    );
  }
};

export default ShowResults;
