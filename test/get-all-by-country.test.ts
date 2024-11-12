import { getAllByCountry } from "../src";

describe("getAllByCountry function", () => {
  test("returns alpha2 code string given country name", () => {
    const result = getAllByCountry("Greece");
    expect(result?.alpha2).toBe("GR");
    expect(result?.alpha3).toBe("GRC");
    expect(result?.flag).toBe("🇬🇷");
  });
  test("handles countries with spaces", () => {
    const result = getAllByCountry("Costa Rica");
    expect(result?.alpha2).toBe("CR");
    expect(result?.alpha3).toBe("CRI");
    expect(result?.flag).toBe("🇨🇷");
  });
  test("handles invalid inputs", () => {
    expect(getAllByCountry("not a country name")).toBe(null);
  });
});
