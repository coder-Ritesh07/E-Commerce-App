import { useDispatch } from "react-redux";
import { removeItem } from "../Store/CartSlice";
import { useState } from "react";

function CartItem(props) {
  let [count, setCount] = useState(0);
  // call the dispatch function 
  let disPatch = useDispatch();
  function handleRemove(removeId) {
    disPatch(removeItem(removeId));
  }
  // Incress the product Quentity by click the plus symbol
  function handleIncress() {
    if (count < 0) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  // decress the product Quentity by click the plus symbol
  function handleDecress() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="py-5">
      <div className="my-0 mx-auto max-w-[90%]">
        <div className="sm:flex items-center justify-between  bg-[#eeebeb] rounded-lg  h-60 min-[425px]:h-72 overflow-hidden">
          <div className="flex items-center ">
            {/* Print all details which is receive from props parent component to child component */}
            <div>
              <img
                src={props.cart.thumbnail}
                alt="thumbnail"
                className="h-full sm:w-[300px] min-[425px]:w-[200px] min-[320px]:w-[150px]"
              />
            </div>
            <div>
              <h2 className="sm:text-3xl min-[425px]:text-2xl text-black font-bold">
                {props.cart.title}
              </h2>
              <h2 className="sm:text-2xl min-[425px]:text-xl text-[#2b2a2a] font-bold">
                {props.cart.brand}
              </h2>
              <span className="sm:text-xl min-[425px]:text-[16px] text-[#2b2a2a] font-semibold">{`$${props.cart.price}`}</span>
              <span className="sm:text-[18px] min-[425px]:text-[14px] text-green-700 font-semibold">{`${props.cart.discountPercentage}% Off`}</span>
            </div>
          </div>
          {/* Order Quentity Incress Or Decress Section here or Remove Section Also here */}
          <div className="flex items-center min-[425px]:justify-center min-[320px]:justify-center min-[320px]:mt-[25px] sm:mr-5">
            <div className="flex justify-between items-center w-28">
              <button
                className=" sm:text-2xl min-[425px]:text-xl min-[320px]:text-[20px] bg-black text-white font-bold rounded-md sm:p-2 min-[425px]:p-1 min-[320px]:p-1"
                onClick={handleIncress}
              >
                <i className="ri-add-line"></i>
              </button>
              <span className="text-2xl font-bold text-black">{count}</span>
              <button
                className="sm:text-2xl min-[425px]:text-xl min-[320px]:text-[20px] bg-black text-white font-bold rounded-md sm:p-2 min-[425px]:p-1 min-[320px]:p-1"
                onClick={handleDecress}
              >
                <i className="ri-subtract-line"></i>
              </button>
            </div>
            <div>
              <button
                className="sm:text-3xl min-[425px]:text-2xl min-[320px]:text-[23px]  font-bold text-black ml-4 hover:scale-105 transition"
                onClick={() => handleRemove(props.cart.id)}
              >
                <i className="ri-delete-bin-6-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
