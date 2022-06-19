import React, {useState} from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import './navbar.css';
import logo from "../../../assets/icons/navbar/navbarLogo.png";
import delivery from '../../../assets/icons/navbar/2833318.png'
const Navbar = () => {
   const [list, setList] = useState([
      {id: 1, itemName: "HOME"},
      {id: 2, itemName: "MENU"},
      {id: 3, itemName: "DUR STORY"},
      {id: 4, itemName: "CONTACT US"},
   ])
   return (
      <nav className='navbar container'>
         <div className="navbar__logo">
            <img src={logo} alt="" />  
         </div>
         <div className="navbar__links">
            <div className="navbar__contact">
               <img src={delivery} alt="" />
               <div>Express Delivery +1 234 567 890</div>
            </div>
            <ul className='navbar__lists'>
            {
               list.map(item => {
                  return <NavbarItem key={item.id} item={item}/>
               })
            }
         </ul>
         </div>
        
      </nav>
   );
};

export default Navbar;