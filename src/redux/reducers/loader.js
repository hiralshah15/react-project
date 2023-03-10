import { TOGGLE_LOADER } from "../constants/const";
let initialState = {
  showSpinner: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {
        ...state,
        showSpinner: action.payload,
      };

    default:
      return state;
  }
};
