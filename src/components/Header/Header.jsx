import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
  const [menus, setMenus] = useState(true);
  // console.log(menus);
  return (
    <header className='py-6 bg-slate-900'>
      <nav className='container mx-auto relative flex justify-between'>
        <h2 className='text-3xl font-semibold text-white'><Link to="/">MonirBD</Link></h2>
        <div onClick={()=> setMenus(!menus)} className='inline-block sm:block md:hidden'>
          <span>
            {
              menus ? <Bars3Icon className="h-7 w-7 text-white cursor-pointer font-semibold md:hidden sm:block" /> : <XMarkIcon className="h-7 w-7 text-white cursor-pointer font-semibold" />
            }
          </span>
        </div>
        <ul className={`md:flex gap-4 md:static absolute bg-slate-700 opacity-75 md:bg-slate-900 duration-200 ${menus ? '-right-96' : 'right-0 mt-14 p-5'}`}>
          <li className='text-white p-2 rounded-md hover:bg-slate-900 md:hover:bg-slate-700'><Link to="/">Home</Link></li>
          <li className='text-white p-2 rounded-md hover:bg-slate-900 md:hover:bg-slate-700'><Link to="/friends">Friends</Link></li>
          <li className='text-white p-2 rounded-md hover:bg-slate-900 md:hover:bg-slate-700'><Link to="/posts">Posts</Link></li>
          <li className='text-white p-2 rounded-md hover:bg-slate-900 md:hover:bg-slate-700'><Link to="/blog">Blog</Link></li>
          <li className='text-white p-2 rounded-md hover:bg-slate-900 md:hover:bg-slate-700'><Link to="/about">About</Link></li>
          <li className='text-white p-2 rounded-md hover:bg-slate-900 md:hover:bg-slate-700'><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;