import React, {useState} from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import './navbar.css';
import logo from "../../../assets/icons/navbar/navbarLogo.png";
import delivery from '../../../assets/icons/navbar/2833318.png'
const Navbar = () => {
   const [list, setList] = useState([
      {id: 2, itemName: "MENU", to: "/menu"},
      {id: 3, itemName: "REVIEWS", to: "reviews"},
      {id: 4, itemName: "CONTACT US", to: "/contact"},
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