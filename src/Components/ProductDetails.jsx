import { useParams } from "react-router-dom";
import useFetchProducts from "../CustomHook/UseFetchProductList";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/CartSlice";

function ProductDetails() {
  // By using the UseParams To access the link
  let { productid } = useParams();
  // Fetch Products from Api using Custom Hook
  let productdetail = useFetchProducts();
  // Filter the product based on Url return id
  let filterdata = productdetail.filter((item) => productid == item.id);
  // call the Dispatch action method inside the Reducer
  let disPatch=useDispatch()
  // Function to add the item inside the cart
  function handleAddToCart(proItem){
   disPatch(addItem(proItem))
  }
  return (
    <>
      <div className="bg-[#c5d4e8d3] ">
        <div className="my-0 mx-auto max-w-[90%] py-10">
          {/* by using the map to Show the data or Render the Details */}
          {filterdata.map((item) => {
            return (
              <>
                <div key={item.id} className="flex flex-col items-center ">
                <div className="sm:flex  min-[425px]:flex-col sm:flex-row items-center justify-center">

                    <div className="mr-5">
                      <img
                        src={item.thumbnail}
                        alt="Image"
                        className="md:w-[500px] md:h-[400px] sm:w-[600px] min-[425px]:h-[300px] min-[320px]:w-[250px] rounded"
                      />
                    </div>
                    <div className="flex flex-col gap-y-3 flex-wrap">
                      <h1 className="md:text-4xl sm:text-3xl min-[425px]:text-2xl font-semibold text-black">
                        {item.title}
                      </h1>
                      <h2 className="md:text-3xl sm:text-2xl min-[425px]:text-xl font-bold text-black ">
                        {item.brand}
                      </h2>
                      <div className="flex ">
                        <span className="md:text-2xl sm:text-xl min-[425px]:text-xl text-black font-semibold">{`$${item.price}`}</span>
                        <span className="md:text-xl sm:text-[18px] font-semibold text-green-500">{`${item.discountPercentage}% Off`}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="md:text-2xl sm:text-xl min-[425px]:text-[18px] font-bold mr-4">
                          Category:
                        </span>
                        <span className="sm:text-2xl min-[425px]:text-[18px] font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="md:text-2xl sm:text-xl min-[425px]:text-[18px] font-bold mr-4">
                          Dimension:
                        </span>
                        <span className="sm:text-[20px] min-[425px]:text-[18px] font-semibold">{`${item.dimensions.depth}⨯${item.dimensions.height}⨯${item.dimensions.width}`}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="md:text-2xl sm:text-xl min-[425px]:text-[18px] font-bold mr-3">
                          Ratings:
                        </span>
                        <span className="sm:text-[20px] min-[425px]:text-[18px] font-semibold">
                          {item.rating}
                        </span>
                        <span className="text-green-500 font-extrabold text-xl">
                          ★
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="md:text-2xl sm:text-xl min-[425px]:text-[18px] font-bold sm:mr-3 min-[425px]:mr-2">
                          Summary:
                        </span>
                        <p className="md:text-[17px] sm:text-[15px] min-[320px]:text-[13px] sm:w-60 min-[425px]:text-[15px]  font-semibold">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="bg-[#001A6E] text-white rounded-md font-bold md:p-4 sm:p-3 p-2 text-xl sm:text-[19px] sm:mt-8 min-[425px]:text-[17px]  hover:scale-105 transition mt-5 " onClick={()=>handleAddToCart(item)}>
                    Add to Cart
                  </button>
                </div>
                {/* Reviewers Section start here */}
                <div id="reviewers" className="flex items-center flex-col py-5">
                    <div>
                  <h1 className="sm:text-3xl min-[425px]:text-2xl min-[320px]:text-xl font-bold text-[#4a4a4a] mb-5">Reviews</h1>
                    </div>
                  <div className="flex gap-4 flex-wrap justify-center">
                    <div className="sm:text-xl font-semibold flex flex-col bg-slate-200 rounded-md items-center p-5">
                      <i className="ri-account-circle-fill text-2xl"></i>
                      <span>{item.reviews[0].comment}</span>
                      <span>{item.reviews[0].reviewerName}</span>
                      <span>{item.reviews[0].reviewerEmail}</span>
                    </div>
                    <div className="sm:text-xl font-semibold flex flex-col bg-slate-200 rounded-md items-center p-5">
                      <i className="ri-account-circle-fill text-2xl"></i>
                      <span>{item.reviews[1].comment}</span>
                      <span>{item.reviews[1].reviewerName}</span>
                      <span>{item.reviews[1].reviewerEmail}</span>
                    </div>
                    <div className="sm:text-xl font-semibold flex flex-col bg-slate-200 rounded-md items-center p-5">
                      <i className="ri-account-circle-fill text-2xl"></i>
                      <span>{item.reviews[2].comment}</span>
                      <span>{item.reviews[2].reviewerName}</span>
                      <span>{item.reviews[2].reviewerEmail}</span>
                    </div>
                  </div>
                </div>
                {/* Devilery Information Start here */}
                <div className="flex flex-col items-center">
                    <div>
                        <h1 className="sm:text-3xl min-[425px]:text-2xl font-bold text-[#4a4a4a] mb-5">Devilery Information</h1>
                    </div>
                    <div className="flex flex-col">
                        <div>
                        <span className="sm:text-2xl min-[425px]:text-xl font-bold mr-2">Availability:</span><span className="sm:text-xl font-semibold min-[425px]:text-[18px]">{item.availabilityStatus}</span>
                        </div>
                        <div>
                            <span  className="sm:text-2xl min-[425px]:text-xl font-bold mr-2">Warranty:</span><span className="sm:text-xl font-semibold min-[425px]:text-[18px]">{item.warrantyInformation}</span>
                        </div>
                        <div>
                            <span className="sm:text-2xl min-[425px]:text-xl font-bold mr-2">ReturnPolicy:</span><span className="sm:text-xl min-[425px]:text-[18px] font-semibold">{item.returnPolicy}</span>
                        </div>
                        <div>
                            <span className="sm:text-2xl min-[425px]:text-xl font-bold mr-2">Minimun Order Quantity:</span><span className="sm:text-xl min-[425px]:text-[18px] font-semibold">{item.minimumOrderQuantity}</span>
                        </div>
                        <div>
                            <span className="sm:text-2xl min-[425px]:text-xl font-bold mr-2">Shipping Information:</span><span className="sm:text-xl min-[425px]:text-[18px] font-semibold">{item.shippingInformation}</span>
                        </div>
                        <div>
                            <span className="sm:text-2xl min-[425px]:text-xl font-bold mr-2">Currently Available:</span><span className="sm:text-xl min-[425px]:text-[18px] font-semibold">{item.stock}</span>
                        </div>
                    </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
