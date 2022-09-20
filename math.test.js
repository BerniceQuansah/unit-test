const { divide, multiply, subtract, sum } = require("./math");

describe("Math", () => {
  it("should sum 2 + 2 to be 4", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
    expect(result).toBeGreaterThan(3);
  });
  it("should multiply 3 * 3 to result to 9", () => {
    const result = multiply(3, 3);
    expect(result).toBe(9);
  });
  it("should divide 3/3 to result to 1", () => {
    const result = divide(3, 3);
    expect(result).toBe(1);
  });

  it("should subtract 8-5 to result to 3", () => {
    const result = subtract(8, 5);
    expect(result).toBe(3);
  });
});


it("should be falsy", () => {
  expect(undefined).toBeFalsy();
});

test("Array", () => {
  let days = ["Monday", "Tuesday", "Wednessday"];
  expect(days).toContain("Tuesday");
  expect(days).not.toContain("Friday");
});
