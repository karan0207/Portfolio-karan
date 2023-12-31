import { NavLink } from "react-router-dom";

// import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/Portfolio-karan' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
       
        <p  className='blue-gradient_text'>KSC</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/Portfolio-karan/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/Portfolio-karan/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
