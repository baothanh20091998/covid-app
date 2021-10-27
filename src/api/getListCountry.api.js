import axios from "axios";

export const getListCountryApi = () =>
  axios({
    url: "https://api.covid19api.com/countries",
    method: "GET",
  });
