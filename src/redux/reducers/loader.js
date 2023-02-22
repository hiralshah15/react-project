
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
