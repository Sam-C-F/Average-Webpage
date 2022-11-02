const { averageOfSeries } = require("./averages");

describe("takes a series of numbers and outputs the mean, median and mode", () => {
  it("should return the same number 2 times in an array if provided with a single number", () => {
    const series = [5];
    expect(averageOfSeries(series)).toEqual([5, 5, ["N/A"]]);
  });
  it("should return [5, 5, 5] when provided with the series 4, 5, 5, 6", () => {
    const series = [4, 5, 5, 6];
    expect(averageOfSeries(series)).toEqual([5, 5, [5]]);
  });
  it("should return the correct result when given an array not in order", () => {
    const series = [2, 6, 8, 0, 4, 4];
    expect(averageOfSeries(series)).toEqual([4, 4, [4]]);
  });
  it("should return multiple numbers in mode array if more than one mode", () => {
    const series = [1, 1, 1, 3, 3, 5, 5, 5];
    expect(averageOfSeries(series)).toEqual([3, 3, [1, 5]]);
  });
  it("should return no mode if no number repeated more than once", () => {
    const series = [1, 3, 5, 7, 9];
    expect(averageOfSeries(series)).toEqual([5, 5, ["N/A"]]);
  });
  it("should work for negative numbers", () => {
    const series = [-3, -5, -7, -13, -13];
    const series2 = [-22, 5, 7, -99, -3, 3, 7];
    expect(averageOfSeries(series)).toEqual([-8.2, -7, [-13]]);
    expect(averageOfSeries(series2)).toEqual([-14.571428571428571, 3, [7]]);
  });
  it("should work for series including decimals", () => {
    const series = [1.5, 2.5, -3, 5, 7.25, 9.75];
    expect(averageOfSeries(series)).toEqual([3.8333333333333335, 5, ["N/A"]]);
  });
  it("should return an error if not provided with numbers", () => {
    const series = ["a", "b", "c"];
    const series2 = [1, 4, 6.7, "j"];
    expect(averageOfSeries(series)).toBe(
      "Please provide a series of numbers only"
    );
    expect(averageOfSeries(series2)).toBe(
      "Please provide a series of numbers only"
    );
  });
});
