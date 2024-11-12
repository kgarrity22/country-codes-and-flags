import { getCountryByAlpha3 } from "../src";

describe("getCountryByAlpha3 function", () => {
  test("returns flag string given country name", () => {
    expect(getCountryByAlpha3("GRC")).toBe("Greece");
  });
  test("handles countries with spaces", () => {
    expect(getCountryByAlpha3("CRI")).toBe("Costa Rica");
  });
  test("handles invalid inputs", () => {
    expect(getCountryByAlpha3("not a country name")).toBe(null);
  });
});
