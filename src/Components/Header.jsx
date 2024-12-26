import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"
function Header() {
  let productItem=useSelector((store)=>store.cart)
  return (
    // Logo section here
    <nav id="nav-sectio" className="bg-[#001A6E] flex justify-between sm:h-20 min-[320px]:h-[60px] items-center sm:p-3 min-[320px]:p-[2px] min-[425px]:p-1 sticky z-50 top-0">
      <div id="logo">
        <span className="sm:text-[28px] sm:font-bold text-white min-[425px]:text-[16px] min-[425px]:font-semibold min-[320px]:text-[14px] min-[320px]:font-semibold">Shoppy<span className="sm:text-3xl sm:font-bold bg-white text-[#001A6E] rounded p-1 min-[320px]:p-[2px] min-[320px]:text-[14px] min-[320px]:font-semibold min-[425px]:text-[18px] min-[425px]:font-semibold ">Globe</span></span>
      </div>
      {/* Home Nav and Product Details Link */}
      <div id="nav-links" className="flex">
        <li className="list-none hover:scale-105 transition">
        <NavLink to="/" className={({isActive})=>` sm:text-2xl font-bold min-[320px]:font-[500] sm:mr-8 min-[425px]:mr-2 min-[320px]:mr-[5px] min-[425px]:text-[16px] min-[320px]:text-[14px] ${isActive?"text-[#969292]":"text-white"}`}>Home</NavLink>

        </li>
        <li className="list-none hover:scale-105 transition">

        <NavLink to="/product"  className={({isActive})=>` sm:text-2xl font-bold sm:mr-5 min-[425px]:mr-0 min-[320px]:font-[500] min-[320px]:text-[14px] min-[425px]:text-[16px]  ${isActive?"text-[#969292]":"text-white"}`}>Product Details</NavLink>
        </li>
      </div>
      {/* cart nav link here */}
      <div className="flex">
        <li className="list-none hover:scale-105 transition">

        <NavLink to="/cartitems" className={({isActive})=>` sm:text-2xl font-bold min-[425px]:text-[16px] min-[320px]:text-[14px] ${isActive?"text-[#969298]":"text-white"}`}>Cart
          <i className="ri-shopping-cart-2-line"></i><sup className="sm:text-xl min-[425px]:text-[18px] min-[320px]:text-[16px] font-bold text-red-700">{productItem.length}</sup>
        </NavLink>
        </li>
      </div>
    </nav>
  );
}
export default Header;
