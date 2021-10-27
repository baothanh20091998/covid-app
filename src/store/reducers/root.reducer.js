import { combineReducers } from "redux";
import { countryReducer } from "./country.reducer";
import { resultReducer } from "./result.reducer";

export const rootReducer = combineReducers({
  country: countryReducer,
  result: resultReducer,
});
