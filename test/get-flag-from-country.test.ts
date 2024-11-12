import { getFlagByCountry } from "../src";

describe("getFlagByCountry function", () => {
  test("returns flag string given country name", () => {
    expect(getFlagByCountry("Greece")).toBe("🇬🇷");
  });
  test("handles countries with spaces", () => {
    expect(getFlagByCountry("Costa Rica")).toBe("🇨🇷");
  });
  test("handles invalid inputs", () => {
    expect(getFlagByCountry("not a country name")).toBe(null);
  });
});
