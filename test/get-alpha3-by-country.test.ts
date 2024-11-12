import { getAlpha3ByCountry } from "../src";

describe("getAlpha3ByCountry function", () => {
  test("returns alpha3 code string given country name", () => {
    expect(getAlpha3ByCountry("Greece")).toBe("GRC");
  });
  test("handles countries with spaces", () => {
    expect(getAlpha3ByCountry("Costa Rica")).toBe("CRI");
  });
  test("handles invalid inputs", () => {
    expect(getAlpha3ByCountry("not a country name")).toBe(null);
  });
});
