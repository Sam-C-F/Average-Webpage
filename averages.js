exports.averageOfSeries = (...nums) => {
  const orderedSeries = [...nums];

  let totalOfSeries = 0;
  orderedSeries.forEach((number) => (totalOfSeries += number));
  const mean = totalOfSeries / orderedSeries.length;

  let median = 0;
  if (!orderedSeries.length % 2 === 0) {
    median = orderedSeries[Math.floor(orderedSeries.length / 2)];
  } else {
    median =
      (orderedSeries[Math.floor(orderedSeries.length / 2)] +
        orderedSeries[Math.floor(orderedSeries.length / 2) + 1]) /
      2;
  }

  const numberFrequency = {};
  orderedSeries.forEach(
    (number) => (numberFrequency[number] = numberFrequency[number] + 1 || 1)
  );
  let modes = [];
  let max = 0;
  for (const key in numberFrequency) {
    const number = key;
    const count = numberFrequency[key];
    if (count > max) {
      modes = [parseInt(number)];
      max = count;
    } else if (count === max) {
      modes.push(parseInt(number));
    }
  }

  return [mean, median, modes];
};
