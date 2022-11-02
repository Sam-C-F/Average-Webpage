const { averageOfSeries } = require("./averages");

describe("takes a series of numbers and outputs the mean, median and mode", () => {
  it("should return the same number 2 times in an array if provided with a single number", () => {
    expect(averageOfSeries(5)).toEqual([5, 5, []]);
  });
  it("should return [5, 5, 5] when provided with the series 4, 5, 5, 6", () => {
    expect(averageOfSeries(4, 5, 5, 6)).toEqual([5, 5, [5]]);
  });
  it("should return the correct result when given an array not in order", () => {
    expect(averageOfSeries(2, 6, 8, 0, 4, 4)).toEqual([4, 4, [4]]);
  });
  it("should return multiple numbers in mode array if more than one mode", () => {
    expect(averageOfSeries(1, 1, 1, 3, 3, 5, 5, 5)).toEqual([3, 3, [1, 5]]);
  });
  it("should return no mode if no number repeated more than once", () => {
    expect(averageOfSeries(1, 3, 5, 7, 9)).toEqual([5, 5, []]);
  });
  it("should work for negative numbers", () => {
    expect(averageOfSeries(-3, -5, -7, -13, -13)).toEqual([-8.2, -7, [-13]]);
    expect(averageOfSeries(-22, 5, 7, -99, -3, 3, 7)).toEqual([
      -14.571428571428571,
      3,
      [7],
    ]);
  });
  it("should work for series including decimals", () => {
    expect(averageOfSeries(1.5, 2.5, -3, 5, 7.25, 9.75)).toEqual([
      3.8333333333333335,
      5,
      [],
    ]);
  });
});
