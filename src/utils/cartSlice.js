import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    
    reducers:{
        //mutating the state over here, (directly changing basically)
        addItem:(state,action)=>{
            // console.log("State",state);
            // console.log("action",action);
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearItem:(state,action)=>{
            state.items.length=0;
        }
    }
    
})

//saare action nikaala
export const{addItem,removeItem,clearItem}=cartSlice.actions;

//reducer bhi nikaala
export default cartSlice.reducer;
