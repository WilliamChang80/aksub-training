const paymentReducer = (
  state = {
    payments: []
  },
  action
) => {
  switch (action.type) {
    case "BUY_ITEM":
      const paymentList = [...state.payments, ...action.payload];
      return {
        ...state,
        payments: paymentList
      };
    default:
      return state;
  }
};

export default paymentReducer;
