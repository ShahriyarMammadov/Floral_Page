import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Popconfirm } from "antd";
import "./index.scss";
import { Helmet } from "react-helmet";

const DetailPage = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const nav = useNavigate();

  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleOk = (id) => {
    setConfirmLoading(true);
    setTimeout(() => {
      axios.delete(`http://localhost:3000/productFlowers/${id}`);
      setOpen(false);
      setConfirmLoading(false);
      nav("/");
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const getData = async () => {
    let response = await axios.get(
      `http://localhost:3000/productFlowers/${id}`
    );
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="detailPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data?.name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="cardDetail">
        <div className="image">
          <img src={data?.flowerImage} alt="" />
        </div>
        <div className="about">
          <h1>Name: {data?.name}</h1>
          <p>Price: {data?.price}</p>
          <p>Country: {data?.country}</p>
          <p>Color: {data?.color}</p>
          <Popconfirm
            title="Title"
            description="Open Popconfirm with async logic"
            open={open}
            onConfirm={() => {
              handleOk(data?._id);
            }}
            okButtonProps={{
              loading: confirmLoading,
            }}
            onCancel={handleCancel}
          >
            <Button type="primary" onClick={showPopconfirm}>
              Delete
            </Button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
