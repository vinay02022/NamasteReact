import { Link } from "react-router-dom";
import { LOGO_URLs } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img
            src={LOGO_URLs}
            alt="Chef Logo"
          />
        </div>
        <div className="nav-items">
          <ul className="list-items">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/career" >Career</Link></li>
            
          </ul>
        </div>
      </div>
    );
  };
  export default Header