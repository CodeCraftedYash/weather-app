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
    <nav className='flex justify-between items-center gap-10 bg-[#2b95ff] p-4 '>
        <h2 className='font-bold text-xl float-left'>
            Weather-App
        </h2>
        <ul className='sm:flex gap-10 hidden'>
            {navItems.map((item) => (
                <li key={item.to} className='whitespace-nowrap flex items-center gap-2'>
                    <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange-700 font-bold sm:text-[1.2rem]'
                                : 'text-white hover:text-blue-500 sm:text-[1.2rem]'
                        }
                    >
                        {item.name}
                    </NavLink>
                    <span className='text-white'>{item.icon}</span>
                </li>
            ))}
        </ul>
        <HamburgerMenu navItems={navItems}/>
    </nav>
);
}

export default Navbar