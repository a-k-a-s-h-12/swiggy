import React from "react";
import { IMG_CDN_URL } from "../utils/data";
import Star from "../utils/star";
function RestaurantCard(props) {
  const { ResInfo } = props;
  // ARRAY DESTRUCTUING
  const ResDes = [
    ResInfo.info.name,
    ResInfo.info.cuisines,
    ResInfo.info.avgRating,
    ResInfo.info.costForTwo,
    ResInfo.info.sla.deliveryTime,
  ];
  const [name, cuisines, avgRating, costForTwo, deliveryTime] = ResDes;
  return (

    <div className="res-card w-[273px] transition ease-in delay-150 ml-2 hover:scale-95 mr-3 mb-3">
      <div className="h-[182px] rounded-[15px] overflow-hidden relative">
        <img
          className="w-full"
          src={IMG_CDN_URL + ResInfo.info.cloudinaryImageId}
          alt="food"
        />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end text-[18px] p-2 font-bold text-white tracking-tighter uppercase">
          {costForTwo}
        </div>
      </div>
      <div className="ml-2">
        <div className="font-semibold">{ name }</div>
        <div className="flex items-center">
          <div>
            <Star />
          </div>
          <div className=" px-1 font-semibold">{avgRating}</div>
          <div className=" font-semibold ">{deliveryTime + " mins"}</div>
        </div>
        <div className="text-gray-900">{cuisines.join(", ")}</div>
      </div>
    </div>
  );
}

export default RestaurantCard;
