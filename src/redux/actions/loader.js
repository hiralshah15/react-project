//Action Creators

import { TOGGLE_LOADER } from "../constants/const";

export const toggleLoader = (value) => (dispatch) => {
  dispatch({
    type: TOGGLE_LOADER,
    payload: value || false,
  });
};
