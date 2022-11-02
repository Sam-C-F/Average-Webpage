const { averageOfSeries } = require("./averages");

describe("takes a series of numbers and outputs the mean, median and mode", () => {
  it("should return the same number 3 times in an array if provided with a single number", () => {
    expect(averageOfSeries(5)).toEqual([5, 5, [5]]);
  });
  it("should return [5, 5, 5] when provided with the series 4, 5, 5, 6", () => {
    expect(averageOfSeries(4, 5, 5, 6)).toEqual([5, 5, [5]]);
  });
});
