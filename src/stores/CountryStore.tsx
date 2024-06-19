import { makeAutoObservable } from "mobx";
import { getCountryByName } from "../api/apiService";
import { CountryInfo } from "../api/apiService";

class CountryStore {
  maxSuggestions: number = 0;
  countryName: string = "";
  showSuggestions: boolean = false;
  countries: CountryInfo[] = [];
  filteredCountries: CountryInfo[] = [];
  selectedCountry: CountryInfo | null = null;

  constructor(maxSuggestions: number) {
    this.maxSuggestions = maxSuggestions;
    makeAutoObservable(this);
  }

  setShowSuggestions(showSuggestions: boolean) {
    this.showSuggestions = showSuggestions;
  }
  setCountryName(countryName: string) {
    this.countryName = countryName.toLowerCase();
    this.fetchCountries();
  }

  filterCountries() {
    this.filteredCountries = this.countries.filter((country) => {
      const searchTerm = this.countryName.trim();
      return (
        country.name.toLowerCase().startsWith(searchTerm) ||
        country.fullName.toLowerCase().startsWith(searchTerm)
      );
    });

    this.filteredCountries = this.filteredCountries.slice(
      0,
      this.maxSuggestions
    );
  }

  async fetchCountries() {
    try {
      const countries = await getCountryByName(this.countryName);
      this.countries = countries;
      this.filterCountries();
    } catch (error) {
      console.error(error);
    }
  }

  selectCountry(country: CountryInfo) {
    this.countryName = country.name;
    this.selectedCountry = country;
    this.filteredCountries = [country];
  }
}

export default CountryStore;
