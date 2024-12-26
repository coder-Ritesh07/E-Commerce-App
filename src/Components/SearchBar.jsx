import { useState } from "react";

function SearchBar(props){
    let [search,setSearch]=useState('')
    function hanldeSearchButton(){
        props.handleSearch(search)
        setSearch("")
    }
    return (
        // this is the search bar for Product search
        <div className="flex items-center">
            <input type="text" name="search" placeholder="Search Products" value={search} onChange={(e)=>setSearch(e.target.value)} className="rounded-lg sm:text-xl font-semibold text-black focus:outline-none pl-2 sm:w-80 sm:h-10 mr-5 min-[425px]:w-52 min-[425px]:text-[17px] min-[320px]:w-[190px] min-[320px]:rounded min-[320px]:text-[14px] min-[320px]:h-[30px] min-[425px]:h-[30px]" />
            <button className="bg-[#001A6E] sm:w-28 min-[425px]:w-20 min-[320px]:w-[60px] h-10 rounded-lg" onClick={hanldeSearchButton}><i className="ri-search-eye-line sm:text-3xl min-[320px]:text-[20px] min-[320px]:font-semibold text-white font-bold min-[425px]:text-[25px]"></i></button>
        </div>
    )
}
export default SearchBar;