const stringinator = require('../../stringinator');

describe("tests isDigit", () => {
  it("returns false for empty string", () => {
    expect(stringinator.isDigit("")).toBe(false);
  });

  it("returns true for a digit", () => {
    expect(stringinator.isDigit("1")).toBe(true);
  });

  it("returns false for a letter", () => {
    expect(stringinator.isDigit("a")).toBe(false);
  });

  it("returns false for two digits", () => {
    expect(stringinator.isDigit("32")).toBe(false);
  });


});
