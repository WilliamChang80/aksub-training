const itemReducer = (
  state = {
    items: []
  },
  action
) => {
  switch (action.type) {
    case "ADD_ITEMS":
      const datas = [...state.items, ...action.payload];
      return {
        ...state,
        items: datas
      };
    default:
      return state;
  }
};

export default itemReducer;
