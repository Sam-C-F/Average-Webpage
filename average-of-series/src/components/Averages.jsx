import { averageOfSeries } from "../util-func/averages";

const Averages = ({ series }) => {
  const seriesArray = [];
  series.forEach((number) => seriesArray.push(parseInt(number)));
  const [mean, median, mode] = averageOfSeries(seriesArray);

  return !series[0] ? (
    "Please enter a series"
  ) : (
    <section>
      <p>The mean of your series is {`${mean}`}</p>
      <p>The median of your series is {`${median}`}</p>
      <p>The mode of your series is {`${mode}`}</p>
    </section>
  );
};

export default Averages;
