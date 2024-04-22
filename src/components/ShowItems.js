import React from 'react'
import { CDN_URLs } from '../utils/constants';
const ShowItems = (props) => {
  console.log("propeee",props.data);
  const {category,name,description,imageId,price,defaultPrice}=props?.data;
  return (
    <div className='flex  justify-between w-9/12 mx-auto mb-2 pb-2 rounded-md bg-black-300  border border-solid border-green-300 '>
      <div className='text-left'>
        <h2 className='font-bold'>{name}</h2>
        <span>₹{price ? price/100 :defaultPrice/100}</span>
       

        <p className='text-gray-500 letter-spacing: -0.05;'>{description}</p>
    </div>
    <div className='object-cover h-full w-36 mt-2 pl-4'>
      <div className='cursor-pointer mr-5 b-0 flex justify-center'>
        <button className='w-12 h-8 absolute rounded-md bg-gray-300'>ADD+</button>
      </div>
    <img className="rounded-md justify-center"
        
        src={CDN_URLs + imageId}
        alt={`Image for ${name}`}
      />
    </div>
    </div>
  )
}

export default ShowItems;