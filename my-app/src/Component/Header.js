import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const status = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="bg-grey-50 shadow-lg mb-4">
      <div className="max-w-[1400px] mx-auto flex justify-between">
        <div className="m-4 p-4 w-[100px]">
          <img className="w-full" src="./Swiggy-emblem.png" alt="logo" />
        </div>
        <div className="m-4 p-4">
          <ul className="flex">
            <li className="px-4">{status ? "🟢" : "🔴"}</li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="./about">About</Link>
            </li>
            <li className="px-4">
              <Link to="./contact">Contact</Link>
            </li>
            <li className="px-4">
              <Link to="./Cart">Cart ({cartItems.length})</Link>
            </li>
            <li className="px-4">
              <Link to="./instamart">InstaMart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
