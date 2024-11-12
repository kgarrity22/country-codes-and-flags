import { getAlpha2ByCountry } from "../src";

describe("getAlpha2ByCountry function", () => {
  test("returns alpha2 code string given country name", () => {
    expect(getAlpha2ByCountry("Greece")).toBe("GR");
  });
  test("handles countries with spaces", () => {
    expect(getAlpha2ByCountry("Costa Rica")).toBe("CR");
  });
  test("handles invalid inputs", () => {
    expect(getAlpha2ByCountry("not a country name")).toBe(null);
  });
});
