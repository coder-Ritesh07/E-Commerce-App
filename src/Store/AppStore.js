import {configureStore} from '@reduxjs/toolkit'
import cardReducer from "./CartSlice.js"
let appStore=configureStore({
    reducer:{
        cart:cardReducer
    }
})
export default appStore;