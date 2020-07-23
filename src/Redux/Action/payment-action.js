export const buyItem = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: "BUY_ITEM",
    payload: data
  });
};
