import React, { useEffect, useState } from 'react';
import { Menu_URLs } from '../utils/constants';
import { useParams } from 'react-router-dom';
import MenuCard from './MenuCard';
import axios from 'axios';
const RestaurentMenu = () => {
    const URL = window.location.href.split("/");
    const resId = URL[URL.length - 1];
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenuList();
    }, []);
    const fetchMenuList = async () => {
            const response = await axios.get(Menu_URLs + resId);
            const menuData = response?.data?.data;
            // console.log("here is ",menuData.data.cards[4].cardGroupMap.regular.cards[2].card.card.title);
            console.log("MenuData-Response", menuData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
            
            setResInfo(menuData);  
    };
    return (
        <div className='menu'>
            {resInfo && (
                <MenuCard data={resInfo}/>
            )}
        </div>
    );
};

export default RestaurentMenu;
