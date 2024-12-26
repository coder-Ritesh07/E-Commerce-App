import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/CartSlice";
function ProductItem(props) {
  let disPatch = useDispatch();
//   dispatch method called here
  function handleCart(items) {
    disPatch(addItem(items));
  }
  return (
    <div
      id="card"
      className="bg-[#eeebeb] w-52 h-[360px] shadow flex flex-col justify-center items-center rounded-md overflow-hidden hover:scale-105 transition"
    >
      <img src={props.items.thumbnail} alt="image" className="w-full h-44" />
      <h2 className="text-2xl font-bold text-[#484747]">
        {props.items.category}
      </h2>
      <h2 className="text-green-700 font-bold text-[20px]">{`${props.items.discountPercentage}% Off`}</h2>
      {/* this button add the product to the cart */}
      <button
        className="bg-black text-white font-2xl font-bold rounded p-2 my-3 hover:scale-105 transition"
        onClick={() => handleCart(props.items)}
      >
        Add to Cart
      </button>
      {/* By Click the View More user can see the Product details in briefly */}
      <Link
        to={`/product/${props.items.id}`}
        className="hover:scale-105 transition"
      >
        <span className="text-[16px] font-semibold text-[#484747] ">
          Click Here View More<i className="ri-arrow-right-wide-line"></i>
        </span>
      </Link>
    </div>
  );
}
export default ProductItem;
