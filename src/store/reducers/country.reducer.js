import { GET_LIST_COUNTRY } from "../constant/country.constant";

const initialState = {
  listCountry: [],
};

export const countryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_COUNTRY: {
      state.listCountry = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
