import { NavLink } from "react-router-dom";
import Logo from "../../Images/Logo.jpg";
import "../../Styles/NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="nav">
        <div className="mycontainer">
          <div className="logo-div">
            <NavLink to="/">
              {" "}
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/freetrial">Free Trial</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
