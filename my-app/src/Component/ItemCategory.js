import React from "react";
import { ITEM_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCategory = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    toast("Added to cart", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="my-2">
        {items.map((item, index) => (
          <div key={index}>
            <div className="border-b-2 my-5 pb-8 flex">
              <div className="w-10/12 flex flex-col">
                <span className="font-semibold">{item.card.info.name}</span>
                <span className="font-semibold text-[14px]">
                  ₹{item.card.info.price / 100}
                </span>
                {item.card.info.ratings.aggregatedRating.rating ? (
                  <span className="text-[13px] my-2 text-green-600 font-semibold">
                    ⭐{item.card.info.ratings.aggregatedRating.rating}
                    <span className="pl-[2px]">
                      ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                    </span>
                  </span>
                ) : (
                  <span></span>
                )}

                <span className="text-gray-500 text-[13px]">
                  {item.card.info.description}
                </span>
              </div>

              <div className="w-2/12 h-24 pb-7overflow-hidden relative">
                {item.card.info.imageId && (
                  <>
                    <button
                      className="text-green-500 font-bold border border-gray-300 px-5 py-1 rounded-lg bg-white absolute bottom-[-10px] left-[30px] transition-all ease-in delay-150 hover:scale-90"
                      onClick={() => handleAddToCart(item)}
                    >
                      ADD +
                    </button>
                    <img
                      src={ITEM_IMG_URL + item.card.info.imageId}
                      alt=""
                      className="w-full h-full rounded-lg"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCategory;
