// ONLY FETCHING THE DATA HERE
import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [dish, setDish] = useState([]);
    
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    try {
      const data = await fetch(
        ` https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.01420&lng=76.99410&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
      );
      const json = await data.json();
      setRestaurantDetails(json.data.cards[2].card.card.info);
      const resMenuCategories = json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res) => {
          return (
            res?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        });
      setDish(resMenuCategories);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  }
  return { restaurantDetails, dish };
};

export default useRestaurantMenu;
