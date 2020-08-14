import React from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ onCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      const countries = await fetchCountries();
      setCountries(countries.data.countries);
    };
    fetchCountriesData();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        className={styles.nativeSelect}
        defaultValue=""
        onChange={(e) => onCountryChange(e.target.value)}
      >
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
