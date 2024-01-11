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
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Career</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header