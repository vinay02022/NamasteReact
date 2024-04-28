import React from 'react'
import { CDN_URLs } from '../utils/constants';
import { addItem, removeItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
const ShowItems = (props) => {
  console.log("Props",props);
  // const{itemList}=props;

  

  // console.log("propeee",itemList);
  const {category,name,description,imageId,price,defaultPrice}=props?.data;
  //dispatch a Function(reducer Function)-
  const dispatch=useDispatch()

  const handleAddItems=(itemList)=>{
    // console.log("ItemCheck-",itemList);
    dispatch(addItem(itemList))

    //jab jab tum y kroge , behind the scene redux will create an object
    //{
// payload:{ pizza } and pass it as a second argument in that cartSlice addItems Function , like in place of action there
    // }

  }
  const handleRemoveItems=(itemList)=>{
    dispatch(removeItem(itemList))
  }
  return (
    <div className='flex  justify-between w-9/12 mx-auto mb-2 pb-2 rounded-md bg-black-300  border border-solid border-green-300 '>
      <div className='text-left'>
        <h2 className='font-bold'>{name}</h2>
        <span>₹{price ? price/100 :defaultPrice/100}</span>
       

        <p className='text-gray-500 letter-spacing: -0.05;'>{description}</p>
    </div>
    <div className='object-cover h-full w-full mt-2 pl-4'>
     <button className='w-12 h-8 absolute rounded-md bg-gray-300' onClick={()=>{handleRemoveItems(props)}}>❌</button>
     <div className='flex justify-end'>
     <button className='w-12 h-8 absolute rounded-md bg-gray-300' onClick={()=>{handleAddItems(props)}}>ADD+</button>

     <img className="rounded-md h-24 w-6/12"
        src={CDN_URLs + imageId}
        alt={`Image for ${name}`}
      />
     </div>
    </div>
    </div>
  )
}

export default ShowItems;