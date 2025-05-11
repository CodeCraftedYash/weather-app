
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { type NavItem } from "../types/navItemsType";
import { NavLink } from "react-router-dom";
function HamburgerMenu({navItems}:{navItems:NavItem[]}) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sm:hidden">
        {!isOpen?<FaBars size={20} onClick={() => setIsOpen(!isOpen)}/>:
        <ImCross size={20} onClick={() => setIsOpen(!isOpen)}/>}
        {isOpen?<ul className='sm:hidden gap-1 flex flex-col absolute top-16 right-1 bg-neutral-100 p-1 box-border rounded-xl shadow-xl z-50 border-4 border-[#2b95ff]'>
            {navItems.map((item) => (
                <li key={item.to} className='whitespace-nowrap flex items-center gap-2 bg-[#2b95ff] p-2 rounded-md hover:cursor-pointer' >
                    <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange-300 font-bold sm:text-[1.2rem] flex items-center gap-2 custom-text-shadow'
                                : 'text-white hover:text-blue-500 sm:text-[1.2rem] flex items-center gap-2'
                        }
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {item.name}
                        <span>{item.icon}</span>
                    </NavLink> 
                    
                </li>
            ))}
        </ul>:""}
    </div>
  )
}

export default HamburgerMenu