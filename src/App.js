import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import {RouterProvider, createBrowserRouter,Outlet} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Career from "./components/Career";
import RestaurentMenu from "./components/RestaurentMenu";



// import Data from "./components/Data"
/**
 * Header
 *  -logo
 *  -Navs
 * Body
 * -Search
 * -Restaurent-Container
 *     -Restaurent-Card
 * Footer
 * -links
 * -About
 * -Team
 * -Career
 * -Contact
 */

//Y h Element
// const ilaaj=<span>I am Ilaaj Element____!! Check How I got ind=side Dom</span>
// const RestaurentCard = (props) => {
//     // const{shopName,food,price}=props
//     console.log("phuchhhhRestCardMein------------------------");

//     const{resData}=props
//     const{cloudinaryImageId,name,id}=resData?.data

//     console.log(resData);
    
//   return (
//     <div className="res-card">
//               {console.log("restKAnder------------------------")}

//       <img
//         src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
//   alt="Loading....."
//       />
//       <div className="card-details">
//         key={id}
//         <h3>{name}</h3>
//         {/* <h3>{food}</h3>
//         <h4>${price}</h4> */}
//       </div>
//     </div>
// );
// };




    //------WHEN  set Dynamic data in one card itself , inspite different card to be render on map so go up and create a new card for each 
    //resturent by usin MAP
  //   <div className="menu-cards">
  //   {resData.map((res) => (
  //     console.log(res),
  //     <div className="res-card" key={res.info.id}>
  //       <img
  //       src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+res.info.cloudinaryImageId}

  //         // src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //         alt="Loading....."
  //       />
  //       <div className="card-details">
  //         <h3>{res.info.name}</h3>
  //         {/* Additional details like food and price can be added here */}
  //       </div>
  //     </div>
  //   ))}
  // </div>



  // ... rest of your component code

//   const {
//     name,
//     cuisines,
//     costForTwo,
//     avgRating,
//     locality,
//     areaName
//   } = resData.info;

//   return (
//     <div className="res-card">
//       <img
//         src={`https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8...`} // Complete the URL
//         alt="Loading..."
//       />
//       <div className="card-details">
//         <h3>{name}</h3>
//         <p>Cuisines: {cuisines.join(", ")}</p>
//         <p>Cost for two: {costForTwo}</p>
//         <p>Avg Rating: {avgRating}</p>
//         <p>Locality: {locality}</p>
//         <p>Area: {areaName}</p>
//       </div>
//     </div>
//   );
// };
const AppLayout = () => {
  
  return (
    <div className="app">
      <Header />
      <Outlet />
      
    </div>
  );
};
const appRouters=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:
    [
    { 
      path:"/",
      element:<Body />,
      errorElement:<Error />
  },
  {
    path:"/about",
    element:<About/>

  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/career",
    element:<Career/>
  },
{
  path:"/restaurants/:resid",
  element:<RestaurentMenu/>

}     ]
}
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouters} />)
