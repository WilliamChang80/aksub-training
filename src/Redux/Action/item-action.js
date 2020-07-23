import axios from "axios";

export const addItems = () => async (dispatch) => {
  const data = await axios
    .get("/products")
    .then((res) => res.data.data)
    .catch((e) => console.log(e));
  dispatch({
    type: "ADD_ITEMS",
    payload: data
  });
};

export const addItemsToCart = (data) => (dispatch) => {
  dispatch({
    type: "ADD_ITEMS_TO_CART",
    payload: data
  });
};
