import React, { useState } from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import "./index.scss";
import axios from "axios";
import { Helmet } from "react-helmet";

const AddProductsPage = () => {
  const [message, setMessage] = useState(false);
  const {
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    resetField("flowerImage");
    resetField("name");
    resetField("country");
    resetField("price");
    resetField("color");
    axios.post(`http://localhost:3000/productFlowers`, data);
    setMessage(true);
  };

  setTimeout(() => {
    setMessage(false);
  }, 2000);

  return (
    <>
      <div className="max">
        {message ? (
          <h1
            style={{
              height: "65vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Successfully
          </h1>
        ) : (
          <div className="forms">
            <Helmet>
              <meta charSet="utf-8" />
              <title>Add Flowers</title>
              <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1>Post Flowers</h1>
            <form onSubmit={handleSubmit(onSubmit)} shouldUnregister={true}>
              <input
                placeholder="flowerImage. . . ."
                {...register("flowerImage", {
                  required: true,
                  maxLength: 520,
                  minLength: 5,
                })}
              />
              {errors.flowerImage && <span>This field is required</span>}
              <input
                placeholder="name. . . ."
                {...register("name", {
                  required: true,
                  maxLength: 280,
                  minLength: 5,
                })}
              />
              {errors.name && <span>This field is required</span>}
              <input
                placeholder="price. . . ."
                type="number"
                {...register("price", {
                  required: true,
                  max: 209000,
                  min: 10,
                })}
              />
              {errors.price && <span>This field is required</span>}
              <input placeholder="color. . . ." {...register("color")} />
              {errors.color && <span>This field is required</span>}
              <input
                placeholder="country. . . ."
                {...register("country", { required: true })}
              />
              {errors.country && <span>This field is required</span>}
              <button type="submit" className="button-86">
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default AddProductsPage;
