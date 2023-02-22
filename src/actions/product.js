import { SHOW_LOADER } from "../constants/const";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADER, payload: true });
    let pro = await fetch("https://dummyjson.com/products")
      .then(async (res) => {
        let data = await res.json();
        console.log("res", data);
        dispatch({ type: SHOW_LOADER, payload: false });
        return data;
      })
      .catch((e) => console.log("error", e));
    return pro;
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    dispatch({ type: SHOW_LOADER, payload: true });
    let pro = await fetch(`https://dummyjson.com/products/${id}`)
      .then(async (res) => {
        let data = await res.json();
        
        dispatch({ type: SHOW_LOADER, payload: false });
        return data;
      })
      .catch((e) => console.log("error", e));
    return pro;
  };
};
