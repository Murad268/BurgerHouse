import React, {useState} from 'react';
import './navbarItem.css';
const NavbarItem = ({item}) => {
   return (
      <li className='navbarItem'>
         {item.itemName}
      </li>
   );
};

export default NavbarItem;