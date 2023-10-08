export const filterCountries = (countries, item) =>
  countries.filter(country => country.name.common === item)
