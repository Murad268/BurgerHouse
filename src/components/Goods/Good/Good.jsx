import React from 'react';
import burger1 from '../../../assets/images/goods/burger_5448.png';
import burger2 from '../../../assets/images/goods/burger_5451.png';
import burger3 from '../../../assets/images/goods/burger_image_5447.png';
import './good.css';
const Good = ({good}) => {
   const goods = [
      burger1,
      burger2,
      burger3
   ]
   return (
      <div className='good'>
         <div className="good__img">
            <img src={goods[good.id]} alt="" />
         </div>
         <div className="good__title">{good.name}</div>
         <div className="good__desc">{good.desc}</div>
         <button className="godd__button">Order Now</button>
      </div>
   );
};

export default Good;