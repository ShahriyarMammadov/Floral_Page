import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delWishListAction } from "../../../redux/action/flower.action";
import "./index.scss";
import { Helmet } from "react-helmet";

const WishList = () => {
  const wishData = useSelector((state) => state.wishListReducer);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(delWishListAction(e));
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WishList</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="cards">
        {wishData?.map((e) => {
          return (
            <div className="card">
              <div className="image">
                <img src={e?.flowerImage} alt="" />
              </div>

              <div className="body">
                <div
                  className="wish"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6%",
                  }}
                >
                  <h1>{e?.name}</h1>
                  <button
                    onClick={() => {
                      handleDelete(e);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <p>${e?.price}</p>
                <Link to={`/detailPage/${e._id}`}>MORE</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
