let initialState = {
  loading: true,
  data: undefined,
  error: undefined,
};

export default function flowerReducer(state = initialState, action) {
  switch (action.type) {
    case "PENDING":
      return {
        loading: true,
      };
    case "FULFILLED":
      return {
        loading: false,
        data: action.payload,
      };
    case "REJECTED":
      return {
        loading: false,
        error: action.payload,
      };
    case "SEARCH":
      return {
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
