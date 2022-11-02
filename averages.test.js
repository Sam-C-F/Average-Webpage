const { averageOfSeries } = require("./averages");

describe("takes a series of numbers and outputs the mean, median and mode", () => {
  it("should return the same number 3 times in an array if provided with a single number", () => {
    expect(averageOfSeries(5)).toEqual([5, 5, 5]);
  });
});
