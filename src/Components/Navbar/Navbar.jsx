import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
  const {user , logOut} = useContext(AuthContext)

  const links = <>
    <NavLink className={({ isActive }) => isActive ? 'border-x-2 text-blue-500 text-xl ' : 'text-xl border-x-2 '} to='/'><li>Home</li></NavLink>
    <NavLink className={({isActive}) => isActive? 'border-x-2  text-blue-500  text-xl ': 'text-xl border-x-2 '} to='/all'><li>All Tourists Spot</li></NavLink>
    <NavLink className={({isActive}) => isActive? 'text-blue-500 text-xl border-x-2': 'text-xl  border-x-2 '} to='/add'><li>Add Tourists Spot</li></NavLink>
    <NavLink className={({isActive}) => isActive? 'text-blue-500 text-xl border-x-2 ': 'text-xl  border-x-2 '} to='/my'><li>My List</li></NavLink>
    <NavLink><li></li></NavLink>



  </>




  return (
  <div>
    <div className="navbar bg-blue-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <div className="flex">
          <img className="text-sm w-12" src="/src/assets/earth.png" alt="" />
          <a className="text-4xl font-extrabold">Tourify</a>
        </div>

        <div className="navbar hidden lg:flex mt-2 ml-10">
          <ul className="menu menu-horizontal font-normal gap-x-2">
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
      {
    user ? <>
    
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <div className="tooltip" data-tip={user.displayName}>
      <img className="tooltip h-10 w-10 rounded-full" data-tip={user.displayName} src={user.photoURL} alt="" />
      </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-20 md:w-20">
      <div className="tooltip" data-tip={user.displayName}>
      <img className="tooltip h-10 w-10 rounded-full" data-tip={user.displayName} src={user.photoURL} alt="" />
      </div>
        
     
     <button onClick={logOut}>Log Out</button>
      </ul>
    </div>
    <div className=" navbar-end  hidden md:hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
     <Link><button onClick={logOut} className="font-bold text-xl ml-4 text-blue-500">Log Out</button></Link>
     <div className="tooltip  rounded-full" data-tip={user.displayName}>
      <img className="tooltip h-10 w-10 ml-2 rounded-full" data-tip={user.displayName} src={user.photoURL} alt="" />
      </div>
    </ul>
  </div>
    
  
    
 </>
    : <>
    <Link to='/login'><button className="font-bold text-xl ml-4 text-blue-500">Log In</button></Link>
    <Link to='/register'><button className="font-bold text-xl ml-4 text-blue-500">Register</button></Link>
    </>
   }
      </div>
    </div>
  </div>
);
};

export default Navbar;