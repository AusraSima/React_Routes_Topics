import { NavLink } from "react-router";

function NavBar() {
    return (
        <nav>
            <h1>DEVMOUNTAIN</h1>
            <NavLink to="/" className="bg-black " >
                Home
            </NavLink>
        </nav>
    )

}

export default NavBar;