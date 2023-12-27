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
function printing(){
    console.log("Hello It's an Experiment Calling Inside Component....!!")
}
//Y h Element
// const ilaaj=<span>I am Ilaaj Element____!! Check How I got ind=side Dom</span>

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {printing()}
      <h2>{ilaaj}</h2>

      {/* //Header */}
      {/* //Body */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
