import ProductItem from "./ProductItem";
import useFetchProducts from "../CustomHook/UseFetchProductList";
function ProductList(){
      let items=useFetchProducts()
    return(
      
      <div className="h-full my-0 mx-auto max-w-[90%] flex justify-center flex-wrap gap-5 py-10 ">
       {
        items.map((item)=>{
            return <ProductItem items={item} key={item.id}/>
        })
       }
      </div>

    )
}
export default ProductList;