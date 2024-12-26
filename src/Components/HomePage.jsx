import ProductList from "./ProductList";
import WellCome from "./WellCome";

function HomePage(){
    return(
        <div className="bg-[#c5d4e8d3] h-full ">
            <WellCome/>
         <ProductList/>
        </div>
    )
}
export default HomePage;