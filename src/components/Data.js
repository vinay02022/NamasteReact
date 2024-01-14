import React, { useState, useEffect } from 'react';
import { Restaurents_URL } from '../utils/constants';
import { resObj } from '../utils/mockData';

const Data = () => {
  // State to store the fetched restaurant data
  const [restaurantData, setRestaurantData] = useState(resObj);

  useEffect(() => {
    // Fetch restaurant data using the provided URL
    const fetchData = async () => {
      try {
        const response = await fetch(Restaurents_URL);
        const data_1 = await response.json();
        console.log(data_1);

        // Assuming the response data has a property named 'restaurants' containing an array of restaurant objects
        const rest = data_1.data.cards.card.card.gridElements.infoWithStyle.restaurants.info.name

        // Update the state with the fetched restaurant data
        setRestaurantData(rest);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    let x=fetchData();
    console.log(x);
  }, []); // Empty dependency array ensures that the effect runs only once, equivalent to componentDidMount

  return (
    <div>
      <h1>List of Restaurants</h1>
      <ul>
        {restaurantData.map((restaurant) => (
          <li key={restaurant.info.id}>
            <strong>{restaurant.info.name}</strong> - Avg Rating: {restaurant.info.avgRating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
