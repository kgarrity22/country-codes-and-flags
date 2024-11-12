import { getFlagByAlpha3 } from "../src";

describe("getFlagByAlpha3 function", () => {
  test("returns flag string given country name", () => {
    expect(getFlagByAlpha3("GRC")).toBe("🇬🇷");
  });
  test("handles countries with spaces", () => {
    expect(getFlagByAlpha3("CRI")).toBe("🇨🇷");
  });
  test("handles invalid inputs", () => {
    expect(getFlagByAlpha3("not a country name")).toBe(null);
  });
});
