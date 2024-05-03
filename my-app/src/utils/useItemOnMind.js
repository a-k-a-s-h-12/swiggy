import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const useItemOnMind = (collectionId, tags) => {
  const [OnMindInfo, setOnMindInfo] = useState([]);
  const [ResInfos, setResInfo] = useState([]);
  const [titleInfo, setTitleinfo] = useState();
  useEffect(() => {
    getItemsOnMind();
  }, []);
  async function getItemsOnMind() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&collection=${collectionId}&tags=${tags}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
      );
      const json = await data.json();
      const cards = json.data.cards;
      setTitleinfo(json.data.cards[0])
      const ResInfoOnMind = cards.filter((res) => {
        return (
          res.card.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );
      });
      const RestaurantInfo = ResInfoOnMind.map((x) => x.card.card)
      setOnMindInfo(ResInfoOnMind)
      setResInfo(RestaurantInfo)
      
    } catch (error) {
      console.log("Error:", error);
    }
  }
  // console.log(OnMindInfo)

  
  return {OnMindInfo,ResInfos,titleInfo};
};

export default useItemOnMind;
