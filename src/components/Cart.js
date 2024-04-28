import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import ShowItems from "./ShowItems";

const Cart = () => {
  const itemList = useSelector((store) => {
    // console.log("Store",store);
    return store.cart.items;
  });
  const dispatch=useDispatch();
  const handleClear=()=>{
    dispatch(clearItem())

  }
  console.log("itemListttt", itemList);
  return (
    <>
      <h2 className="text-center">CART</h2>
      <div className="flex justify-end mr-10">
        <button className="bg-black text-white rounded-lg h-10 w-20 hover:bg-red-900 hover:transition-opacity" onClick={()=>{handleClear()}}>
          Clear Cart
        </button>
      </div>

      <div className="w-12/12 m-auto mt-2 h-auto">
        {itemList.map((item) => {
          // {console.log("items",item.card.info)}
          return <ShowItems data={item.data} key={item.data.id} />;
        })}
        {/* // <ShowItems itemList={}/> */}
      </div>
    </>
  );
};
export default Cart;
