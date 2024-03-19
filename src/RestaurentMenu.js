import React from 'react'
import { useEffect,useState } from 'react'
import { Menu_URLs } from './utils/constants'

import { useParams } from 'react-router-dom'
import axios from 'axios'

const RestaurentMenu=()=>{
    const URL = window.location.href.split("/"); 
    const resId = URL[URL.length-1];
    const[menuData,setMenuData]=useState(null)
        useEffect(()=>{
            fetchMenuList()

        },[])
        
        const fetchMenuList=async ()=>{
            // let incomingData= await fetch(Menu_URLs+resId)
            // let dataJson= await incomingData.json();
            let dataJson= await axios.get(Menu_URLs+resId)
            // let dataJson= incomingData;
            // console.log(dataJson.data);
            
            console.log(dataJson);
            setMenuData(dataJson.data.data.cards[0].card.card.info.name)
        }
        console.log(menuData)


    return (
    
<div className='menu'>
    <h1>{menuData}</h1>


</div>

    )
}

export default RestaurentMenu
