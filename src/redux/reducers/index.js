import { combineReducers } from "redux";
import loader from "./loader";
import product from './product'

const rootReducers = combineReducers({
  loader,
  product
});

export default rootReducers;
