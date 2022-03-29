const PrimeNumberInput = ({ numbers, handleNumberChange, checkNumbers }) => {
    return (
      <form onSubmit={checkNumbers}>
        <div className="number">
          Type number(s) here:{" "}
          <input
            pattern="^\d+(?:,\d+)*$"
            required="required"
            placeholder="n or n,n,n"
            value={numbers}
            onChange={handleNumberChange}
          />
        </div>
        <div className="PrimeButton">
          <button type="submit" className="btn">Is this a prime number?</button>
        </div>
      </form>
    );
  };

  export default PrimeNumberInput