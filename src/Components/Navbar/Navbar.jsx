import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false); // state to handle mobile menu open/close

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const links = (
    <>
      <NavLink className={({ isActive }) => (isActive ? "text-blue-500 text-lg font-bold" : "text-lg")} to="/">
        <li>Home</li>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "text-blue-500 text-lg font-bold" : "text-lg")} to="/all">
        <li>All Tourist Spots</li>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "text-blue-500 text-lg font-bold" : "text-lg")} to="/add">
        <li>Add Tourist Spot</li>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "text-blue-500 text-lg font-bold" : "text-lg")} to="/my">
        <li>My List</li>
      </NavLink>
      {!user && (
        <>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-500 text-lg font-bold" : "text-lg")} to="/login">
            <li>Log In</li>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-500 text-lg font-bold" : "text-lg")} to="/register">
            <li>Register</li>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="w-full bg-blue-100">
      <div className="navbar container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center lg:ml-2 mr-4">
            <img className="w-10" src="/earth.png" alt="Tourify logo" />
            <span className="text-3xl font-extrabold lg:ml-2">Tourify</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-x-10">{links}</ul>
        </div>

        {/* Theme Toggle and User Profile */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <label className="cursor-pointer flex ml-8 items-center">
            <input type="checkbox" className="toggle" onChange={handleToggle} checked={theme === "dark"} />
          </label>

          {/* User Profile */}
          {user ? (
            <div className="flex items-center gap-3">
              <img
                data-tooltip-id="profile-tooltip"
                data-tooltip-content={user.displayName}
                className="h-8 w-8 lg:h-10 lg:w-10 rounded-full" // Adjust size for mobile and desktop
                src={user.photoURL}
                alt={user.displayName}
              />
              <Tooltip id="profile-tooltip" place="bottom" />
              
              {/* Log Out Button - Visible Only on Desktop */}
              <button onClick={handleLogOut} className="bg-blue-500 text-white py-1 px-4 rounded-xl hidden lg:block">
                Log Out
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            {links}
            {user && (
              <li>
                <button onClick={handleLogOut} className="bg-red-500 text-white py-1 px-4 rounded">
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
