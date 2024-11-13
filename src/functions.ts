import { countryData } from "./country-lookup";
import { CountryMetadata } from "./types";

/**
 * Get the flag emoji given a country's name
 */
export const getFlagByCountry = (country: string): string | null => {
  return countryData[country]?.flag || null;
};

/**
 * Get the flag emoji given a country's two-letter country code
 */
export const getFlagByAlpha2 = (isoCode: string): string | null => {
  const alpha2ToFlag = Object.fromEntries(
    Object.values(countryData).map(({ flag, alpha2 }) => [alpha2, flag])
  );
  const result = alpha2ToFlag[isoCode] || null;

  return result;
};

/**
 * Get the flag emoji given a country's three-letter country code
 */
export const getFlagByAlpha3 = (isoCode: string): string | null => {
  const alpha3ToFlag = Object.fromEntries(
    Object.values(countryData).map(({ flag, alpha3 }) => [alpha3, flag])
  );
  const result = alpha3ToFlag[isoCode] || null;

  return result;
};

/**
 * Get the two-letter country code given a country's name
 */
export const getAlpha2ByCountry = (country: string): string | null => {
  return countryData[country]?.alpha2 || null;
};

/**
 * Get the three-letter country code given a country's name
 */
export const getAlpha3ByCountry = (country: string): string | null => {
  return countryData[country]?.alpha3 || null;
};

/**
 * Get a country's name given it's associated flag emoji string
 */
export const getCountryFromFlag = (flag: string): string | null => {
  const flagToCountry = Object.fromEntries(
    Object.entries(countryData).map(([country, data]) => [data.flag, country])
  );
  const result = flagToCountry[flag] || null;

  return result;
};

/**
 * Get a country's name given it's associated two-letter country code
 */
export const getCountryByAlpha2 = (isoCode: string): string | null => {
  const alpha2ToCountry = Object.fromEntries(
    Object.entries(countryData).map(([country, data]) => [data.alpha2, country])
  );
  const result = alpha2ToCountry[isoCode] || null;
  return result;
};

/**
 * Get a country's name given it's associated three-letter country code
 */
export const getCountryByAlpha3 = (isoCode: string): string | null => {
  const alpha3ToCountry = Object.fromEntries(
    Object.entries(countryData).map(([country, data]) => [data.alpha3, country])
  );
  const result = alpha3ToCountry[isoCode] || null;

  return result;
};

/**
 * Get a country's name flag, alpha2, and alpha3 codes given the country's name
 */
export const getAllByCountry = (country: string): CountryMetadata | null => {
  return countryData[country] || null;
};

/**
 * Get full dataset of countries mapped to their flag and iso codes
 */
export const getAll = (): { [key: string]: CountryMetadata } => countryData;
