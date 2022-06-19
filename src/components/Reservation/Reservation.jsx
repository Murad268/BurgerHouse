import React from 'react';
import './reservation.css';
import burgerTop from '../../assets/images/reservation/burger_5466.png';
import burgerLeft from '../../assets/images/reservation/bottle_5468.png';
import burgerRight from '../../assets/images/reservation/image_5467.png';
const Reservation = () => {
   return (
      <div className='reservation'>
         <img src={burgerTop} alt="" className="burgerTop" />
         <img src={burgerLeft} alt="" className="burgerLeft" />
         <img src={burgerRight} alt="" className="burgerRight" />
         <div className="container">
            <h5 className="reservation__subtitle">Reservation</h5>
            <h2 className="reservation__title">Book your table</h2>
            <form action="" className="reservation__form">
               <div className="form__wrapper">
                  <div className="input-group">
                     <input placeholder='NAME' type="text" />
                     <input placeholder='DATE' type="text"  />
                     <input placeholder='PEOPLE' type="text" />
                  </div>
                  <div className="input-group">
                     <input placeholder='EMAIL' type="text" />
                     <input placeholder='TIME' type="text" />
                     <button>Find A Table</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Reservation;