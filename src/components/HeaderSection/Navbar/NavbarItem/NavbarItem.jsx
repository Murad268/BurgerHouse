import React, {useState, useEffect} from 'react';
import {NavLink } from 'react-router-dom';
import './navbarItem.css';
const NavbarItem = ({item}) => {
  
   
  
   return (
      <li className='navbarItem'>
         <NavLink  className="link" to={item.to}>{item.itemName}</NavLink>
      </li>
   );
};

export default NavbarItem;