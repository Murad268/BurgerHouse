import React from 'react';
import Navbar from '../Navbar/Navbar';
import './header.css';
import burger from '../../../assets/images/header/advertaisment/photoeditorsdk-export.png';
const Header = () => {
   return (
      <section className='header'>
         <Navbar/>
         <div className="header__body container">
            <div className="header__body__wrapper">
               <div className="header__body__tittles">
                  <div className="header__body__tittles__top">It is a good time for the great taste of burgers</div>
                  <div className="header__body__tittles__bottom">Burger <br /> <span>Week</span></div>
               </div>
               <div className="header__body__Img">
                  <img className='burger' src={burger} alt="" />
                  <div className="price">
                     <div className="price__enter">
                       <div className='price__enter__desc'>
                           $5.<sub className='fr'>49</sub> 
                              <br />
                              <span className="only">Only</span>
                       </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Header;