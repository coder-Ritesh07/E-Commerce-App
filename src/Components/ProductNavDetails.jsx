import useFetchProducts from "../CustomHook/UseFetchProductList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/CartSlice";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function ProductNavDetails() {
  let items = useFetchProducts();
  let disPatch = useDispatch();
  let [filterData, setFilterData] = useState(items);
  useEffect(() => {
    setFilterData(items);
  }, [items]);
  function handleAddToCart(data) {
    disPatch(addItem(data));
  }
  // here i create a function which get data from child componet and by usign this data i can filter the search products
  function handleSearchItem(data) {
    if (typeof data !== "string") {
      alert("Search query should be a string");
      return;
    }
    let res = items.filter((pro) => {
      let brandMatch =
        pro.brand &&
        typeof pro.brand === "string" &&
        pro.brand.toLowerCase().includes(data.toLowerCase());
      let titleMatch =
        pro.title &&
        typeof pro.title === "string" &&
        pro.title.toLowerCase().includes(data.toLowerCase());
      let categoryMatch=pro.category&&typeof pro.category==="string"&&pro.category.toLowerCase().includes(data.toLowerCase())  
      return brandMatch || titleMatch|| categoryMatch;
    });
    setFilterData(res);
  }
  return (
    // Render all items here
    <div className="bg-[#c5d4e8d3] py-10">
      <div id="search-bar" className="flex justify-center">
        <SearchBar handleSearch={handleSearchItem} />
      </div>
      <div className="max-w-[90%] my-8 mx-auto flex flex-wrap gap-5 justify-center ">
        {filterData.map((item) => {
          return (
          
              <div key={item.id}
                id="card"
                className="bg-[#eeebeb] w-56 h-[470px] shadow flex flex-col justify-center items-center rounded-md overflow-hidden hover:scale-105 transition"
              >
                <img src={item.thumbnail} alt="image" className="w-full h-44" />
                <h2 className="text-xl font-bold text-center text-[#484747]">
                  {item.title}
                </h2>
                <span className="text-[#2b2b2b] font-semibold">
                  {item.brand}
                </span>
                <span className="text-[#2b2b2b] font-semibold">
                  {item.category}
                </span>

                <span className="text-red-600 font-semibold">
                  {`$${item.price}`}
                </span>
                <h2 className="text-green-700 font-bold text-[15px]">{`${item.discountPercentage}% Off`}</h2>
                <button
                  className="bg-black text-white font-2xl font-bold rounded p-2 my-3 hover:scale-105 transition"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${item.id}`}
                  className="hover:scale-105 transition"
                >
                  <span className="text-[16px] font-semibold text-[#484747] ">
                    Click Here View More
                    <i className="ri-arrow-right-wide-line"></i>
                  </span>
                </Link>
              </div>
            
          );
        })}
      </div>
    </div>
  );
}
export default ProductNavDetails;
