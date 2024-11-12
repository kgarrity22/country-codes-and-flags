import { getCountryByAlpha2 } from "../src";

describe("getCountryByAlpha2 function", () => {
  test("returns country string given alpha2 code", () => {
    expect(getCountryByAlpha2("GR")).toBe("Greece");
  });
  test("handles countries with spaces", () => {
    expect(getCountryByAlpha2("CR")).toBe("Costa Rica");
  });
  test("handles invalid inputs", () => {
    expect(getCountryByAlpha2("not an alpha2 code")).toBe(null);
  });
});
