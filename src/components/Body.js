import React from "react";
// import { resObj } from '../utils/mockData';
import { useState, useEffect } from "react";
import RestaurentCard,{WithPromotedLabel} from "../components/RestaurentCard";
import RestaurentMenu from "./RestaurentMenu";
import { REST_LIST } from "../utils/constants";
import { Link } from "react-router-dom";
const Body = () => {
  const [res, setRes] = useState([]);
  const [searchedName, setSearchName] = useState([]);
  const [filteredDataByName, setFilteredDataByName] = useState([]);
  const WithPromoLabelCompo=WithPromotedLabel(RestaurentCard)

  useEffect(() => {
    handleUseEffect();
  }, []);

  const handleUseEffect = async () => {
    const data = await fetch(REST_LIST);
    
    console.log("----------------------------------------------------------");
    const json = await data.json();
    console.log("Data is -",json);
    setRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredDataByName(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const handleFilter = () => {
    const nData = res.filter((restorant) => restorant.info.avgRating > 4.5);
    setRes(nData);
  };
  const handleSearchByName = () => {
    const filteredByName = res.filter((resto) => {
      // console.log(res);
      // console.log(searchedName);
      // console.log(resto.info.name);
      return resto.info.name.toLowerCase().includes(searchedName.toLowerCase());
    });
    // console.log(filteredByName);
    setFilteredDataByName(filteredByName);
  };
  //TWO Ways---
  //-----------------------------1st
  // if(res.length==0){
  //   return <h1>Loading....</h1>
  //   // return <shimmer/>  shimmerCOmponent---SimplyCreateAndImportHere
  // }

  // -----------------------------2nd _________________one Liner

  //Now This is Higher Order Component which takes another compo and reture a updated compo

  return res.length == 0 ? (
    <h1>Loading....</h1>
  ) : (
    <div className="body">
      <div className="search">
        <button id="filter-btn" onClick={handleFilter}>
          RatingFilter :
        </button>
        <input
          className="border-4 rounded-sm shadow-2xl w-89 h-8 p-2 m-4 items-center justify-center"
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
          <button onClick={handleSearchByName} className="h-8 w-28 border ">Search</button>
      </div>
      {/* Data render Usse Kro , res original state hai, but filteresData copy so res ka use hum as a resource ki tarah use krenge */}
      <div className="flex flex-wrap justify-center">
        
        {filteredDataByName.map((resto) => (
          
          <Link to={"/restaurants/"+resto.info.id} key={resto.info.id } >
            {resto.info.sla.deliveryTime>35 ? (<WithPromoLabelCompo resData={resto}/>): (<RestaurentCard  resData={resto}/>
          )}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
