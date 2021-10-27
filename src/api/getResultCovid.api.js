import axios from "axios";

export const getResultCovidApi = (country, start, end) =>
  axios({
    url: `https://api.covid19api.com/country/${country}?from=${start}T00:00:00Z&to=${end}T00:00:00Z`,
    method: "GET",
  });
