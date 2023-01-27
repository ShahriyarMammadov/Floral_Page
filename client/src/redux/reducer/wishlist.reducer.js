export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case "WISHLIST":
      return [...state, action.payload];
    case "DEL_WISHLIST":
      return [...state.filter((e) => e._id !== action.payload._id)];
    default:
      return state;
  }
}
