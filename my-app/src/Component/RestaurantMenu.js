import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
// ----custom Hooks----
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // Call useParams to get route parameters
  const params = useParams();
  const { resId } = params;
  const [showIndex, setShowIndex] = useState(0);
  //Res info
  const { restaurantDetails, dish } = useRestaurantMenu(resId);

  if (!restaurantDetails) {
    return <Shimmer />;
  }

  return (
    <div className="w-7/12 my-2 mx-auto">
      <div className="w-7/12 h-auto p-3 mx-auto my-2 border-b-2 border-dashed flex justify-around">
        <div className="m-3 p-3">
          <h2 className="text-2xl font-bold my-2">{restaurantDetails.name}</h2>
          <p className="text-sm">{restaurantDetails.cuisines.join(",")}</p>
          <p className="text-xs">{restaurantDetails.areaName},</p>
          <p className="my-4 font-semibold">
            {restaurantDetails.costForTwoMessage} 🍽
          </p>
        </div>
        <div className="m-3 p-3 ">
          <p className="border border-gray-200 rounded-lg p-2 m-2 text-sm">
            ⭐ {restaurantDetails.avgRating}
          </p>
          <p className="border border-gray-200 p-2 rounded-lg m-2 text-xs">
            {restaurantDetails.totalRatingsString}
          </p>
        </div>
      </div>

      {/* Restaurant Menu */}

      <div>
        {dish.map((resCategory, index) => (
          <RestaurantCategory
            resCategory={resCategory}
            key={resCategory.card.card.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
