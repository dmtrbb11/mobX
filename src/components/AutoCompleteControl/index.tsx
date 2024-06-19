import React from "react";
import { observer } from "mobx-react-lite";
import CountryStore from "../../stores/CountryStore";
import { CountryInfo } from "../../api/apiService";
import "./style.css";

interface Props {
  store: CountryStore;
}

const CountryInput: React.FC<Props> = observer(({ store }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.setCountryName(event.target.value);
    store.setShowSuggestions(true);
  };

  const handleSuggestionClick = (country: CountryInfo) => {
    store.selectCountry(country);
    store.setShowSuggestions(false);
  };

  const renderSuggestions = () => {
    if (!store.filteredCountries.length) {
      return <div className="suggestions-list">Нет совпадений</div>;
    }

    return (
      <div className="suggestions-list">
        {store.filteredCountries.map((country) => (
          <div
            key={country.name}
            className="suggestion-item"
            onClick={() => handleSuggestionClick(country)}
          >
            <span className="suggestion-name">{country.name}</span>
            <span className="suggestion-fullname">{country.fullName}</span>
            <a href={`${country.flag}`} className="suggestion-flag">
              <img src={`${country.flag}`} alt="" />
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="country-input">
      <input
        type="text"
        placeholder="Введите название страны"
        value={store.countryName}
        onChange={handleInputChange}
        onBlur={() => store.setShowSuggestions(false)}
      />
      {store.countries && renderSuggestions()}
    </div>
  );
});

export default CountryInput;
