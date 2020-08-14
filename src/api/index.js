import axios from "axios";

const baseUrl = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  try {
    const url = country ? `${baseUrl}/countries/${country}` : baseUrl;
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/daily`);
    return data.map((daily) => ({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const countries = await axios.get(`${baseUrl}/countries`);
    return countries;
  } catch (error) {
    console.log(error);
  }
};
