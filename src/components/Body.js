import React from 'react';
import { resObj } from '../utils/mockData';
import { useState ,useEffect} from 'react';
import RestaurentCard from '../components/RestaurentCard';

const Body = () => {
  const[res,setRes]=useState(resObj)
  
  const handleFIlter=(()=>{
    let nData=res.filter((restorant)=>{
      let filteredData=restorant.info.avgRating>4.5
      return filteredData
    })
    setRes(nData)
  })
  return (
    <div className="body">
      <div className="search">
        <button id='filter-btn'  onClick={handleFIlter}>Add Filter On Products</button>
      </div>
      <div className="res-container">
        {res.map((resto) => (
            <RestaurentCard resData={resto} key={resto.info.id}/>
        ))}
      </div>
    </div>
  );
};

export default Body;