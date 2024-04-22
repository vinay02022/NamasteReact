import { useState } from "react";
import { CDN_URLs,REST_LIST } from "../utils/constants";

const RestaurentCard = (props) => { 
  // console.log("props",props);

    const { cloudinaryImageId,name,avgRating } = props?.resData?.info;
    
    return (
      <div className="w-64 h-54 bg-slate-400 p-4 m-4 rounded-md flex flex-col hover:bg-stone-100 ">
        <img className="rounded-md object-cover h-52 w-54"
        
          src={CDN_URLs + cloudinaryImageId}
          alt={`Image for ${name}`}
        />
        <div className="flex-grow flex flex-col justify-center">
          <h3 className="font-bold font-sans pt-4">{name}</h3>
          <h3>{avgRating}</h3>
          {/* Additional details like food and price can be added here */}
        </div>
      </div>
    );
  }
  export const WithPromotedLabel = (WrappedComponent) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black m-1 p-1 text-white rounded-lg w-20 h-8">Promoted</label>
          <WrappedComponent {...props} />
        </div>
      );
    };
  };
  
  export default RestaurentCard