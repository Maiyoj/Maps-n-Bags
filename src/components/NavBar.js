import {NavLink} from "react-router-dom"
const navStyles = {
    display: "inline",
    width: "50px",
    padding: "30px",
    textDecoration: "none",
    color: "Black",
  };
  


function Navbar(){
    return(
        <>
        <div className="nav">
        <NavLink
        to={"/"}
        exact="true"
        style={navStyles}
        >
            Home
        </NavLink>

        <NavLink
         exact="true"
        to={"/blog"}
        style={navStyles}
        >
            Blog
        </NavLink>
        
        <NavLink
        to={"/adventure"}
        exact="true"
        style={navStyles}
        >
         About

        </NavLink>
        </div>
        </>
    )

}
export default Navbar;