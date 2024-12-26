import {Routes,Route} from "react-router-dom"
import { lazy, Suspense } from "react"
import HomePage from "./Components/HomePage"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
// import ProductNavDetails from "./Components/ProductNavDetails"
// import ProductDetails from "./Components/ProductDetails"
// import Cart from "./Components/Cart"
import ErroHandle from "./Components/Error/ErrorHandle"

let ProductNavDetails=lazy(()=>import ("./Components/ProductNavDetails.jsx"))
let ProductDetails=lazy(()=>import("./Components/ProductDetails.jsx"))
let Cart=lazy(()=>import("./Components/Cart.jsx"))
function App() {
 
  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<HomePage/>}  />
      <Route path="/product" element={<Suspense fallback={<div className="text-4xl font-bold text-center">Loading Just Wait for Few Minute......</div>}><ProductNavDetails/></Suspense>}/>
       <Route path="/product/:productid" element={<Suspense fallback={<div className="text-4xl font-bold text-center">Loading Just Wait for Few Minute......</div>}><ProductDetails/></Suspense>} />
       <Route path="/cartitems" element={<Suspense fallback={<div className="text-4xl font-bold text-center">Loading Just Wait for Few Minute......</div>}><Cart/></Suspense>}/>
       <Route path="*" element={<ErroHandle/>}/>
     </Routes>

     <Footer/>
    </>
  )
}

export default App
