import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Empty from "./Error/Empty";

function Cart(){
    let prodata=useSelector((store)=>store.cart)
    return(
        // Extract the data from Store or state then by using the map render the items
        <div className="bg-[#c5d4e8d3] ">
            <h1 className="sm:text-3xl min-[425px]:text-2xl min-[320px]:text-xl text-center font-bold text-[#555454]">Cart Items</h1>
            {
                prodata.length===0?<Empty/>:prodata.map((data)=>{
                    return <CartItem cart={data} key={data.id}/>
                })
            }
        </div>
    )
}
export default Cart;