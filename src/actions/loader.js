//Action Creators

import { HIDE_LOADER, SHOW_LOADER } from "../constants/const";

export const showLoader = () => (dispatch) => {
  dispatch({
    type: SHOW_LOADER
  });
};

export const hideLoader = () => (dispatch) => {
  dispatch({
    type: HIDE_LOADER
  });
};
