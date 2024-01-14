import React from 'react';
import { resObj } from '../utils/mockData';
import { useState ,useEffect} from 'react';
import RestaurentCard from '../components/RestaurentCard';

const Body = () => {
const [res, setRes] = useState([]);

  useEffect(() => {
    handleUseEffect();
  }, []);

  const handleUseEffect = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json.data.cards[1]);
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  const handleFilter = () => {
    const nData = res.filter((restorant) => restorant.info.avgRating>4.5);
    
    setRes(nData);
  };
  return (
    <div className="body">
      <div className="search">
        <button id='filter-btn'  onClick={handleFilter}>Add Filter On Products</button>
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