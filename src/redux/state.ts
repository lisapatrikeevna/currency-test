import { currencyReducer } from './currencyReducer';
import {currencyRatesReducer} from "./currencyRatesReducer";
import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";

const reducers = combineReducers({
  currency: currencyReducer,
  currencyRates: currencyRatesReducer,
});
export type RootStateType = ReturnType<typeof reducers>;

export const store = createStore(reducers,applyMiddleware(thunkMiddleware));
