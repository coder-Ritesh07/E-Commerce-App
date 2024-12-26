import { useEffect,useState } from "react";

function useFetchProducts(){
    let [product,setProduct] =useState([])
    // by using the custom hook call the api to access the data
    useEffect(()=>{
        try {
            
            async function fetchData(){
                let data=await fetch("https://dummyjson.com/products")
                let fetchapi=await data.json();
                setProduct(fetchapi.products);
            }
            fetchData()
        } catch (error) {
            alert(error)
        }
    },[])
    return product
}
export default useFetchProducts