import React, { useState } from "react";
import ItemCategory from "./ItemCategory";
const RestaurantCategory = (props) => {

  const { showItems, setShowIndex } = props;
  const { title, itemCards } = props.resCategory.card.card;
  
  const handleClick = () => {
   setShowIndex();
  };
  
  return (
    <div className="w-10/12 my-2 mx-auto">
      <div className="my-2 shadow-md m-2 p-2 py-4F cursor-pointer" onClick={handleClick}>
        <div className="flex justify-between">
          <span className="font-bold">
            {title} ({itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemCategory items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
