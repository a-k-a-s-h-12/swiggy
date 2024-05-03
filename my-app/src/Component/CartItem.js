import React from "react";
import { ITEM_IMG_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../utils/cartSlice";
const CartItem = (props) => {
  const { item } = props;
  const { id, name, price, imageId } = item.card.info;
  const { quantity } = item;
  const TotalAmount = useSelector((store) => store.cart.totalAmount);
  console.log(TotalAmount);
  const dispatch = useDispatch();
  function HandleIncreaseQuantity()
  {
    dispatch(increaseQuantity(id));
  }
  function HandleDecreaseQuantity()
  {
    dispatch(decreaseQuantity(id));
  }
  return (
    <div className="w-7/12 mx-auto mt-3 flex border -2 border-dashed">
      <img
        src={ITEM_IMG_URL + imageId}
        alt="food photo"
        className="w-[100px] h-[100px] rounded-lg"
      />
      <div className="font-semibold border-solid ml-5 flex flex-col pt-3 w-[250px]">
        <span>{name}</span>
        <span> ₹ {price / 100}</span>
      </div>

      <div className="bg-green-600 text-white font-bold w-[100px] h-[25px] rounded-lg flex justify-evenly ml-[50px] mt-[35px] ">
        <span className="mr-1 hover:cursor-pointer" onClick={HandleDecreaseQuantity}>-</span>
        <span className="mr-1">{quantity}</span>
        <span className="mr-1 hover:cursor-pointer" onClick={HandleIncreaseQuantity}>+</span>
      </div>
    </div>
  );
};

export default CartItem;
