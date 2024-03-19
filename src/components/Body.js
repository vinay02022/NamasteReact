import React from "react";
// import { resObj } from '../utils/mockData';
import { useState, useEffect } from "react";
import RestaurentCard from "../components/RestaurentCard";
import RestaurentMenu from "../RestaurentMenu";
import { Link } from "react-router-dom";

const Body = () => {
  const [res, setRes] = useState([]);
  const [searchedName, setSearchName] = useState([]);
  const [filteredDataByName, setFilteredDataByName] = useState([]);

  useEffect(() => {
    handleUseEffect();
  }, []);

  const handleUseEffect = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);
    console.log("----------------------------------------------------------");
    const json = await data.json();
    console.log(json.data);
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
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
  return res.length == 0 ? (
    <h1>Loading....</h1>
  ) : (
    <div className="body">
      <div className="search">
        <button id="filter-btn" onClick={handleFilter}>
          RatingFilter
        </button>
        <input
          className="searchByName"
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
        <button onClick={handleSearchByName}>Search</button>
      </div>
      {/* Data render Usse Kro , res original state hai, but filteresData copy so res ka use hum as a resource ki tarah use krenge */}
      <div className="res-container">
        {filteredDataByName.map((resto) => (
          <Link to={"/restaurants/"+resto.info.id} key={resto.info.id } ><RestaurentCard resData={resto} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
