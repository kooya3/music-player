import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = () => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400">
        {item.name}
      </NavLink>
    ))}
  </div>
)



const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]'>
      <img src={logo} alt="logo" className='
      w-full h-14 object-contain' />

      <NavLinks />

    </div>
  )
};

export default Sidebar;
