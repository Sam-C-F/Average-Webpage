import { useState } from "react";

const EnterSeries = () => {
  const [number, setNumber] = useState("");
  const [series, setSeries] = useState([]);

  const handleOnChange = (e) => {
    setNumber(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSeries([...series, number]);
    setNumber("");
  };

  return (
    <section>
      <hr />
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <label htmlFor="series">Enter a number in you series: </label> <br />
        <br />
        <input
          type="number"
          id="series"
          placeholder="1, 2, 3..."
          value={number}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        <button type="Submit">Submit</button>
      </form>{" "}
      <br />
      <h2>Your series so far:</h2>
      <section>{`${series}`}</section>
    </section>
  );
};

export default EnterSeries;
