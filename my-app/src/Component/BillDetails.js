import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const BillDetails = () => {
  const TotalAmount = useSelector((store) => store.cart.totalAmount);
  return (
    <div className="pl-11 pb-[10px]">
      <div className="font-bold text-[17px] pt-3 pb-6">BILL DETAILS</div>
      <div className="flex flex-col ">
        <div className="flex justify-between pb-3 w-[400px]">
          <span className="font-semibold">
            <FontAwesomeIcon icon={faListUl} /> &nbsp;Item Total
          </span>

          <span className="font-semibold">₹ {TotalAmount}</span>
        </div>
        <div className="flex justify-between w-[400px] mb-2 pb-2">
          <span className="font-semibold">
            <FontAwesomeIcon icon={faMotorcycle} /> Delivery Charge{" "}
          </span>
          <span className="font-semibold">
            ₹ <s>45</s>
            <span className="ml-1 bg-blue-600 pl-1 pr-1 rounded-md text-white">FREE</span>
          </span>
        </div>
        <div className="flex justify-between w-[400px] pb-2">
          <span className="font-semibold">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Grand Total{" "}
          </span>
          <span className="font-semibold">₹ {TotalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
