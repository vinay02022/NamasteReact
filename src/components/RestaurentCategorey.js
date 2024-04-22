import React,{useState} from 'react'
import ShowItems from './ShowItems';
const RestaurentCategorey = (props) => {
  
  // const[showItems,setShowItems]=useState(false)
     console.log("props",props.setShowIdx);
     //incoming_Props hain n ki useState Variable
    const{showData,setShowIdx}=props;
    // console.log("showData",showData);
    const{title,itemCards}=props?.data;
    const items=props?.data?.itemCards;
    const handleClick=()=>{
      //khud ko call kr liya 
      setShowIdx();
      // setShowItems(!showItems);
    }
  return (
  <>
    <div onClick={handleClick} className='cursor-pointer p-4 m-1 w-9/12  mx-auto border-1 border-gray-400 shadow-2xl bg-slate-400 hover:bg-slate-800 hover:text-white rounded-lg flex  items-center justify-between' >
    <h1 className='font-bold cursor-pointer' >{title}({itemCards.length})</h1>
    <span className="pt-4 text-xl align-items-center pb-2 cursor-pointer">⬇️</span>
    </div>
    <div>
    { showData && items.map((item) => {
    // {console.log("items",item.card.info)}
    return <ShowItems data={item.card.info} key={item.card.info.id} />;
})}

    </div>
  </>
  )
}

export default RestaurentCategorey