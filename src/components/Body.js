import React from 'react';
import { resObj } from '../utils/mockData';
import { useState } from 'react';
import RestaurentCard from '../components/RestaurentCard';

const Body = () => {
  const styling = {
    backgroundColor: 'black'
  };
  const handleFIlter=(()=>{
    
    console.log("Clicked_Brooo");
  })
  return (
    <div className="body">
      <div className="search">
        <button id='filter-btn'  onClick={handleFIlter}>Add Filter On Products</button>
      </div>
      <div className="res-container">
        {resObj.map((resto) => (
            <RestaurentCard resData={resto} key={resto.info.id}/>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
