import { getCountryFromFlag } from "./../src/functions";
describe("getCountryFromFlag function", () => {
  test("returns flag string given country name", () => {
    expect(getCountryFromFlag("🇬🇷")).toBe("Greece");
  });
  test("handles invalid inputs", () => {
    expect(getCountryFromFlag("not a flag emoji")).toBe(null);
  });
});
