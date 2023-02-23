import { SET_PRODUCTS } from "../constants/product";
import { toggleLoader } from "./loader";

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return { data: data?.products || [] };
  } catch (err) {
    return { err };
  }
}

export const getProducts = () => {
  return async (dispatch) => {
    const { data } = await fetchProducts();
    dispatch({ type: SET_PRODUCTS, payload: data });
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    dispatch(toggleLoader(true));
    let pro = await fetch(`https://dummyjson.com/products/${id}`)
      .then(async (res) => {
        let data = await res.json();

        dispatch(toggleLoader(false));
        return data;
      })
      .catch((e) => console.log("error", e));
    return pro;
  };
};
