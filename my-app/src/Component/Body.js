import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "../utils/data";
import React, { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { SwipperSetting } from "../utils/SwiperSetting";
import { SwipperSettingOnMind } from "../utils/SwiperSettingOnMind";
import OnYourMind from "./OnYourMind";


const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [resFullDetails, setResFullDetails] = useState();
  const [onMind, setOnMind] = useState();
  const [itemOnMind, setItemOnMind] = useState([]);

  // for netWork status
  const status = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setOnMind(json.data.cards[0]);
    //Filtering items in whats on your mind
    setItemOnMind(json.data.cards[0].card.card.imageGridCards.info);
    setResFullDetails(json.data);
    setResList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  
  // For network connection
  if (status === false) return <h1>Oops!!! Check your InterNet Connection</h1>;

  if (resList.length === 0) {
    //Conditional rending for Shimmer UI
    return <Shimmer />;
  }
  return (
    <div className="body-container max-w-[1400px] mx-auto">
      <div className="filter flex mb-4">
        <div className="Search-filter mr-4">
          <input
            className="border border-solid border-black mx-2 rounded-lg"
            type="text"
            value={searchTxt}
            onChange={(event) => setSearchTxt(event.target.value)}
          />
          <button
            className="search-btn bg-orange-400 px-3 rounded-lg text-white font-semibold transition-all ease-in delay-150 hover:scale-110 hover:shadow-xl"
            onClick={() => {
              const searchItems = resList.filter((items) =>
                items.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setResList(searchItems);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="Btn bg-orange-400 px-3 rounded-lg text-white font-semibold transition ease-in delay-150 hover:scale-110 hover:shadow-lg"
          onClick={() => {
            const Filter = resList.filter((x) => x.info.avgRating > 4);
            setResList(Filter);
          }}
        >
          Filter Top Restaurant
        </button>
      </div>

      {/* Whats on your mind */}
      <div>
        <div className="font-bold text-[24px] ml-1">
          {onMind.card.card.header.title}
        </div>
        <Swiper {...SwipperSettingOnMind}>
          {itemOnMind.map((item, index) => {
            // Move variable declarations outside of the JSX expression
            let collectionId, tags; // Declare variables here
            const entityId = item.entityId;
            const text = item.action.text;
            const lowerText = text.toLowerCase();
            const Validation = !isNaN(entityId);
            if (Validation === true) {
              collectionId = entityId;
              tags = `layout_BAU_Contextual%2C${lowerText}`;
            } else {
              const queryParams = new URLSearchParams(entityId.split("?")[1]);
              collectionId = queryParams.get("collection_id");
              tags = queryParams.get("tags"); // Assigning the value of tags
            }
            return (
              <SwiperSlide key={index}>
                <Link
                  to={"/onYourMind/" + collectionId + "/" + tags}
                  key={item.id}
                >
                  <OnYourMind item={item} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Restaurant cards */}
      <div className="res-container flex flex-wrap gap-5 mt-[50px] border-t-2 border-b-2 border-dotted border-gray-300">
        <div className="font-bold text-[24px] ml-1 mt-10">
          {resFullDetails?.cards[1]?.card?.card?.header?.title}
        </div>
        <Swiper {...SwipperSetting}>
          {resList.map((resItems, index) => {
            return (
              <SwiperSlide key={index}>
                <Link
                  to={"/restaurant/" + resItems.info.id}
                  key={resItems.info.id}
                >
                  <RestaurantCard ResInfo={resItems} key={resItems.info.id} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default Body;
