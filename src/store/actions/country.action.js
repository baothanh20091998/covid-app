import { getListCountryApi } from "../../api/getListCountry.api";
import { GET_LIST_COUNTRY } from "../constant/country.constant";

export const getListCountryAction = () => async (dispatch) => {
  try {
    const res = await getListCountryApi();
    dispatch({
      payload: res.data,
      type: GET_LIST_COUNTRY,
    });
  } catch (error) {
    console.log(error);
  }
};
