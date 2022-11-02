import { useState } from "react";
import Averages from "./Averages";
import Reset from "./Reset";
import Series from "./Series";

const EnterSeries = () => {
  const [number, setNumber] = useState("");
  const [series, setSeries] = useState([]);

  const handleOnChange = (e) => {
    setNumber(parseInt(e.target.value));
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
      <Series series={series} />
      <br />
      <hr />
      <Averages series={series} />
      <br />
      <br />
      <Reset setSeries={setSeries} />
    </section>
  );
};

export default EnterSeries;
