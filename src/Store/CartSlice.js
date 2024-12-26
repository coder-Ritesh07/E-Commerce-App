import {createSlice} from "@reduxjs/toolkit";

export let cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload);
        },
        removeItem:(state,action)=>{
            if(state.length>0){
                return state.filter((item) => item.id !== action.payload);
            }
            
        },
    }
})
export const {addItem,removeItem}=cartSlice.actions;
export default cartSlice.reducer;