import { NavLink } from 'react-router-dom';
import { type NavItem } from '../types/navItemsType';
import { RiHome5Fill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import HamburgerMenu from '../ui/HamburgerMenu';
function Navbar() {
    const navItems:NavItem[] = [
  { name: 'Home', to: '/',icon:<RiHome5Fill size={20} /> },
  { name: 'About', to: '/about',icon:<IoBookSharp size={20} /> },
  { name: 'Contact Me', to: '/weather',icon:<IoMdContact size={20} /> },
];
return (
    <nav className='flex justify-between items-center gap-10  p-4 min-h-[8dvh] custom-gradient'>
        <h2 className='font-bold text-xl float-left pointer-events-none'>
            Weather-App
        </h2>
        <ul className='sm:flex gap-10 hidden'>
            {navItems.map((item) => (
                <li key={item.to} className='whitespace-nowrap hover:scale-105 transition-all duration-200 ease-in-out '>
                    <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange-500 font-bold sm:text-[1.2rem] flex items-center gap-2 '
                                : 'text-white sm:text-[1.2rem] flex items-center gap-2 hover:text-green-500'
                        }
                    >
                        {item.name}
                        <span>{item.icon}</span>
                    </NavLink>
                    
                </li>
            ))}
        </ul>
        <HamburgerMenu navItems={navItems}/>
    </nav>
);
}

export default Navbar