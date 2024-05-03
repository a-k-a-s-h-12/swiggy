import React from "react";
import { Link, useParams } from "react-router-dom";
import useItemOnMind from "../utils/useItemOnMind";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const ItemOnMind = () => {
  const params = useParams();
  const { collectionId, tags } = params;
  const { OnMindInfo, ResInfos, titleInfo } = useItemOnMind(collectionId, tags);

  const title = titleInfo && titleInfo.card && titleInfo.card.card.title;
  const description = title && titleInfo.card.card.description;
  if (ResInfos.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="font-bold text-[30px] ml-2 mb-2 uppercase">{title}</div>
      <div className="ml-2 mb-3 text-[18px] text-gray-500">{description}</div>
      <div className="flex flex-wrap">
        {ResInfos.map((res, index) => {
          return (
            <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
              <RestaurantCard ResInfo={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ItemOnMind;
