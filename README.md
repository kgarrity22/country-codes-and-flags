# Country Codes and Flags ⛳️

## Features

This package provides utilities for 

* retrieving a country's flag emoji, ISO alpha2, and ISO alpha3 codes given the country's name
* reverse lookups to go from ISO codes or a flag emoji back to a country's name


## Installation

```bash
npm install country-codes-and-flags
```



## Usage

### Available Methods
| Function             | Input Type | Input                     | Output                                       |
|----------------------|------------|---------------------------|----------------------------------------------|
| `getFlagByCountry`   | `string`   | Country name              | Flag emoji `string` or `null`                |
| `getFlagByAlpha2`    | `string`   | Two-letter country code   | Flag emoji `string` or `null`                |
| `getFlagByAlpha3`    | `string`   | Three-letter country code | Flag emoji `string` or `null`                |
| `getAlpha2ByCountry` | `string`   | Country name              | Two-letter country code `string` or `null`   |
| `getAlpha3ByCountry` | `string`   | Country name              | Three-letter country code `string` or `null` |
| `getCountryFromFlag` | `string`   | Flag emoji                | Country name `string` or `null`              |
| `getCountryByAlpha2` | `string`   | Two-letter country code   | Country name `string` or `null`              |
| `getCountryByAlpha3` | `string`   | Three-letter country code | Country name `string` or `null`              |
| `getAllByCountry`    | `string`   | Country name              | `CountryMetadata` object or `null`           |


### Examples

```typescript
import {getAllByCountry, getFlagByCountry, getCountryFromFlag} from "country-flag-emojis";

// Get All Metadata
const greeceData = getAllByCountry("Greece");
console.log(greeceData)
// Output:
// {
//   'flag': '🇬🇷',
//   'alpha2': 'GR',
//   'alpha3: 'GRC',
// }

// Get Flag
const greeceFlag = getFlagByCountry("Greece");
console.log(greeceFlag)
// Output:
// '🇬🇷'

// Get Country
const greeceName = getCountryFromFlag("🇬🇷");
console.log(greeceName)
// Output:
// 'Greece'

```

### Handling Invalid Inputs

Invalid inputs or non-matching country names will result in `null` being returned. Planning to implement more descriptive error handling in future versions

## Building the Library

You can clone this repo and build it locally with the following command: 

```bash
npm run build
```

This will generate builds in the `dist` directory.


## Contributing

Any contributions or suggestions for improvements are welcome! Please open an issue or submit a pull request.

## Contact

For comments or questions email kathleen.garrity223@gmail.com

## License

MIT