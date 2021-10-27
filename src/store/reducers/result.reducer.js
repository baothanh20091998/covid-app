import { GET_RESULT_COVID } from "../constant/result.action";

const initialState = {
  result: [],
};

export const resultReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RESULT_COVID: {
      state.result = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
