const Series = ({ series }) => {
  return (
    <ul className="series">
      {series.map((number, index) => {
        return <li key={index}>{number}</li>;
      })}
    </ul>
  );
};

export default Series;
