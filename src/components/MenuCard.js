import React from "react";
import { useState } from "react";
import RestaurentCategorey from "./RestaurentCategorey";
const MenuCard = (props) => {
  // console.log(props)
  // const {cards}=props?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const categoreyList =
    props?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("categoreyList->", categoreyList);
  //

  const {
    name,
    avgRating,
    totalRatingsString,
    location,
    costForTwoMessage,
    distance,
    feeDetails,
    sla,
  } = props?.data?.cards[2]?.card?.card?.info;
  const { title, itemCards } =
    props?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card;
  console.log("Recom", itemCards);
  const [isOpen, setIsOpen] = useState(false);
  const [showIdx, setShowIdx] = useState([0]);

  // const toggleAccordion = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <div>
      <div className="w-100 shadow-2xl bg-slate-400 rounded-lg m-20 p-12 mt-0 mb-1">
        <h1 className="font-bold">{name}</h1>
        <h2 className="font-semibold">
          {avgRating} ({totalRatingsString}) . {costForTwoMessage}
        </h2>
        <h3>{location}</h3>
        <h3>
          {sla.lastMileTravelString} |₹ {feeDetails.totalFee / 100} Delivery Fee
          Will Apply
        </h3>
      </div>
      {/* <div className="w-9/12  mx-auto border-2 border-solid border-green-500 flex  items-center justify-between">
        <h1 className="font-bold m-2 p-2">{title}</h1>
        <span className="pt-4 text-xl">⬇️</span>
      </div> */}
      <div className="text-center m-2 p-4 border-2 border-solid border-s-red-50">
      {categoreyList.map((categorey,idx) => (
        //y line yaad rhe
          <RestaurentCategorey data={categorey?.card?.card} key={idx} showData={idx===showIdx?true:false}
          setShowIdx={(()=>{
            setShowIdx(idx);
          })}
          />
        ))}
      </div>
      
    </div>
  );
};

export default MenuCard;
