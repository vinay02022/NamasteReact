import { configureStore } from "@reduxjs/toolkit";
import cartKaReducer from "./cartSlice";
console.log("cartSliceReducer------------------",cartKaReducer);

const appStore=configureStore({
    reducer:{
        cart:cartKaReducer,
        //user:userKaReducer- likeWise
    }
})

export default appStore;

// First We have Created this Store
//now lets provide this appStore to the application 
//and yha game main aayega Provider from react-redux
//go to root file app.js