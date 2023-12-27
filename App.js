import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg"
          alt="Chef Logo"
        />
      </div>
      <div className="nav-items">
        <ul className="list-items">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Career</li>
        </ul>
      </div>
    </div>
  );
};
function printing() {
  console.log("Hello It's an Experiment Calling Inside Component....!!");
}
//Y h Element
// const ilaaj=<span>I am Ilaaj Element____!! Check How I got ind=side Dom</span>
const RestaurentCard = () => {
  return (
    <div className="res-card">
      <img
        src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Loading....."
      />
      <div className="card-details">
        <h3>RotiWala-North Indian</h3>
        <h3>Biryaani</h3>
        <h4>$ 21</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input placeholder="Search" />
      </div>
      <div className="res-container">
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />

      {/* {printing()} */}
      {/* <h2>{ilaaj}</h2> */}

      {/* //Header */}
      {/* //Body */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
