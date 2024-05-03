import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCategory from "./ItemCategory";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartItem from "./CartItem";
import BillDetails from "./BillDetails";
import Cancellation from "./Cancellation";
const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  function HandleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div>
      <div className="w-7/12 mx-auto bg-gray-100 py-[5px]">
        {CartItems.length > 0 && (
          <div className=" w-11/12 mx-auto flex justify-between font-bold  border-b-2 border-dashed pb-3">
            <span className="text-[17px] mt-4">CART</span>
            <button
              className="bg-black text-white p-2 mt-2 text-[15px] rounded-xl"
              onClick={HandleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
        {CartItems.length === 0 ? (
          <div className="w-10/12 mx-auto text-center mt-4 flex flex-col">
            <span className="text-[17px] font-bold">Your cart is empty</span>
            <span className="text-[13px] mb-8">
              You can go to home page to view more restaurants
            </span>
            <img
              src="foodcart.png"
              alt="image"
              className="w-[250px] h-[250px] mx-auto opacity-20 mb-3"
            />
            <div className="flex justify-center">
              <Link to="/">
                <span className="bg-black text-white mt-2  p-2 rounded-lg font-semibold">
                  SEE RESTAURANT NEAR YOU
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mb-5">
            <div className="w-10/12 mx-auto flex flex-col">
              {CartItems.map((x, index) => (
                <CartItem item={x} key={x.card.info.id} />
              ))}
            </div>
          </div>
        )}
      </div>
      {CartItems.length > 0 && (
        <div className="w-7/12 mx-auto flex justify-between">
          <div className="w-[550px]  bg-gray-100 mt-[100px]">
            <BillDetails />
          </div>
          <div className="w-[550px] bg-gray-100 mt-[100px]">
            <Cancellation />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
