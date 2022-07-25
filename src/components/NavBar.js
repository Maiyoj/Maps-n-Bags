import {NavLink} from "react-router-dom"


function Navbar(){
    return(
        <>
        <NavLink
        to={"/"}
        exact
        >
            Home
        </NavLink>
        <NavLink
        exact
        to={"/blog"}
        >
            Blog
        </NavLink>
        <NavLink
        to={"/adventure"}
        >
            Adventure

        </NavLink>
        </>
    )

}
export default Navbar;