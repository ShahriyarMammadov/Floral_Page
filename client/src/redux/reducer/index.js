import { combineReducers } from "redux";
import flowerReducer from "./flower.reducer";
import wishListReducer from "./wishlist.reducer";

export const rootReducer = combineReducers({
  flowerReducer,
  wishListReducer,
});
