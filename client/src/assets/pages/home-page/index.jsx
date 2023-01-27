import React, { useEffect, useState } from "react";
import "./index.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useDispatch, useSelector } from "react-redux";
import {
  flowerAction,
  searchAction,
  wishListAction,
} from "../../../redux/action/flower.action.js";
import Loading from "../../components/loading";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const [toggle, setToggle] = useState(true);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const GetData = useSelector((state) => state.flowerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flowerAction());
  }, []);

  const handleSearch = async (e) => {
    let response = await axios.get(`http://localhost:3000/productFlowers`);
    let SearchData = response.data.filter((element) =>
      element.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    dispatch(searchAction(SearchData));
  };

  const handleSort = () => {
    setToggle(!toggle);
    if (toggle) {
      let sortedData = GetData.data.sort((a, b) => a.price - b.price);
      dispatch(searchAction(sortedData));
    } else {
      dispatch(flowerAction());
    }
  };

  const handleWishList = (data) => {
    dispatch(wishListAction(data));
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section id="section1">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="image1 image">
                <div className="text">
                  <p>Fixed-Height Slider</p>
                  <h1>Excellent bouquets for you</h1>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="image2 image">
                <div className="text">
                  <p>Floral</p>
                  <h1>Excellent bouquets for you</h1>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="image3 image">
                <div className="text">
                  <p>Floral</p>
                  <h1>Excellent bouquets for you</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section2">
        <div className="left">
          <div className="text">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore
              dicunt an, ea civibus.
            </p>
            <button>Read more</button>
          </div>
        </div>
        <div className="right">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg"
            alt=""
          />
        </div>
      </section>

      <section id="section3">
        <div className="header">
          <em>Devoted to wonderful beauty</em>
          <h1>Flowers Pricing</h1>
        </div>

        <div className="searchComp">
          <div className="search">
            <input
              type="text"
              placeholder="Enter the Name"
              onChange={(e) => {
                handleSearch(e);
              }}
            />
            <button
              onClick={() => {
                handleSort();
              }}
            >
              Sort by Price
            </button>
          </div>
        </div>

        <div className="cards">
          {GetData.loading ? (
            <Loading />
          ) : (
            GetData.data.map((e) => {
              return (
                <>
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
                        <i
                          style={{ cursor: "pointer" }}
                          class="fa-solid fa-heart"
                          onClick={() => {
                            handleWishList(e);
                          }}
                        ></i>
                      </div>
                      <p>${e?.price}</p>
                      <Link to={`/detailPage/${e._id}`}>MORE</Link>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
        <section id="section4">
          <div className="header">
            <em>Devoted to wonderful beauty</em>
            <h1>Events Pricing</h1>
          </div>

          <div className="eventsCard">
            <div className="priceCard">
              <p>
                <span>%16</span>per table
              </p>
              <h1>Birthday Events</h1>
              <div className="text">
                <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              </div>
              <button>Shop now</button>
            </div>
            <div className="priceCard">
              <p>
                <span>%31</span>per table
              </p>
              <h1>Birthday Events</h1>
              <div className="text">
                <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              </div>
              <button>Shop now</button>
            </div>
            <div className="priceCard">
              <p>
                <span>%52</span>per table
              </p>
              <h1>Birthday Events</h1>
              <div className="text">
                <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              </div>
              <button>Shop now</button>
            </div>
          </div>
        </section>
      </section>

      <section id="section5">
        <div className="header">
          <em>Contacts</em>
          <h1>Our Team</h1>
        </div>

        <div className="teamCard">
          <div className="cards">
            <div className="image">
              <img
                src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg"
                alt=""
              />
            </div>
            <div className="about">
              <h1>Velva Kopf</h1>
              <em>Biologist</em>
            </div>
          </div>
          <div className="cards">
            <div className="image">
              <img
                src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg"
                alt=""
              />
            </div>
            <div className="about">
              <h1>Sarah Palmer</h1>
              <em>Florist</em>
            </div>
          </div>
          <div className="cards">
            <div className="image">
              <img
                src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg"
                alt=""
              />
            </div>
            <div className="about">
              <h1>Jessica Swift</h1>
              <em>PhotoGrapher</em>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
