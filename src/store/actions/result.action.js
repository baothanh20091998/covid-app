import { getResultCovidApi } from "../../api/getResultCovid.api";
import { GET_RESULT_COVID } from "../constant/result.action";

export const getResultCovidAction =
  (country, start, end, loading, setLoading) => async (dispatch) => {
    try {
      setLoading((loading = loading + 1));
      const res = await getResultCovidApi(country, start, end);
      dispatch({
        type: GET_RESULT_COVID,
        payload: res.data,
      });
      setLoading((loading = loading - 1));
    } catch (error) {
      console.log(error);
    }
  };
