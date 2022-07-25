import {NavLink} from "react-router-dom"
const navStyles = {
    display: "inline",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "Black",

  };
  


function Navbar(){
    return(
        <>
        <div className="nav">
        <NavLink
        to={"/"}
        exact
        style={navStyles}
        >
            Home
        </NavLink>
        <NavLink
        exact
        to={"/blog"}
        style={navStyles}
        >
            Blog
        </NavLink>
        <NavLink
        to={"/adventure"}
        style={navStyles}
        >
            Adventure

        </NavLink>
        </div>
        </>
    )

}
export default Navbar;