// import { SHOW_LOADER } from "../constants/const";
// import * as CONSTS from '../constants/const'

let initialState = {
  showSpinner: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return {
        ...state,
        showSpinner: action.payload
      };

    default:
      return state;
  }
};
