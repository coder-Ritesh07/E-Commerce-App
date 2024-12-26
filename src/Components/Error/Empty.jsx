import { Link } from "react-router-dom";
function Empty(){
    return(
        <div className=" h-screen my-0 mx-auto max-w-[90%] flex flex-col items-center justify-center">
            {/* this component is render when store or state has no value  */}
            <img src="https://cdn-icons-png.flaticon.com/512/7707/7707025.png" alt="empty img" className="sm:w-[450px] sm:h-[350px] min-[320px]:w-[220px]"/>
            <span className="sm:text-2xl min-[425px]:text-xl min-[320px]:text-[15px] font-semibold text-[#444343]">Your Cart is Empty 😞...If You Want To Shopping 👉<Link to="/product" className="underline text-blue-600">ShoppyGlobe</Link></span>
        </div>
    )
}
export default Empty;