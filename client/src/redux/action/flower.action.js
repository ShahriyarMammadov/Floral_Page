import axios from "axios";

export const flowerAction = () => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get(`http://localhost:3000/productFlowers`);
      dispatch({
        type: "FULFILLED",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: error,
      });
    }
  };
};
export const searchAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH",
      payload: data,
    });
  };
};
export const wishListAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: "WISHLIST",
      payload: data,
    });
  };
};
export const delWishListAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: "DEL_WISHLIST",
      payload: data,
    });
  };
};
