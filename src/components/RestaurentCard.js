import { CDN_URLs } from "../utils/constants";

const RestaurentCard = (props) => {  
    const { resData } = props;
    // const { cloudinaryImageId, name } = resData?.data;
  
  //   console.log(resData);
  
  //   return (
  //       <div className="res-card" key={id}>
  //           {console.log("restKAnder------------------------")}
  
  //           <img
  //               src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
  //               alt="Loading....."
  //           />
  //           <div className="card-details">
  //               <h3>{name}</h3>
  //               {/* <h3>{food}</h3>
  //               <h4>${price}</h4> */}
  //           </div>
  //       </div>
  //   );
  // };
  return (
    <div className="res-card">
      <img
        src={CDN_URLs+resData.info.cloudinaryImageId}
        alt={`Image for ${resData.info.name}`}
      />
      <div className="card-details">
      <h3>{resData.info.avgRating}</h3>
        <h3>{resData.info.name}</h3>
        {/* Additional details like food and price can be added here */}
      </div>
    </div>
  );
  }
  export default RestaurentCard