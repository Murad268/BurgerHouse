import React from 'react';
import './upcoming.css';
import upComing from '../../assets/images/upcoming/burger_image_5341.png'
const UpComing = () => {
   return (
      <div className='upComing container'>
         <div className="upComing__wrapper">
            <div className="upComing__desc">
               <div className="upComing__desc__subtitle">Discover</div>
               <div className="upComing__desc__title">Upcoming Events</div>
               <div className="upComing__desc__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
               </div>
            </div>
            <div className="upComing__img">
               <img src={upComing} alt="" />
            </div>
         </div>
      </div>
   );
};

export default UpComing;