import { getFlagByAlpha2 } from "../src";

describe("getFlagByAlpha2 function", () => {
  test("returns flag string given country name", () => {
    expect(getFlagByAlpha2("GR")).toBe("🇬🇷");
  });
  test("handles countries with spaces", () => {
    expect(getFlagByAlpha2("CR")).toBe("🇨🇷");
  });
  test("handles invalid inputs", () => {
    expect(getFlagByAlpha2("not a country name")).toBe(null);
  });
});
