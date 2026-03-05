import { NavLink } from "react-router";
import globe from "../assets/globe.png";

function NavBar() {
  return (
    <nav className="bg-black flex justify-between items-center text-2xl p-5">
      <div className="flex justify-between items-center w-1/4">
        <img src={globe} className="logo bg-white" alt="Logo" />
        <h1 className="text-white ml-5 text-4xl">DEVMOUNTAIN</h1>
      </div>
      <div className="flex justify-between w-1/4 pr-10">
        <NavLink to="/" className="bg-black text-white">
          Home
        </NavLink>
        <NavLink to="/latest" className="bg-black text-white">
          Topics
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
