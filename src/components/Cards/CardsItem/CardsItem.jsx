import React from 'react';
import './catdsItem.css';
import first from '../../../assets/images/cards/burger_image_5437.png';
import second from '../../../assets/images/cards/image_5433.png';
import third from '../../../assets/images/cards/image_5434.png';
const CardsItem = ({card}) => {
   const imgs = [
      first,
      second,
      third
   ]
   return (
      <div className="cardsItem">
         <div className="cardsItem__title">TRY IT TODAY</div>
         <div className="cardsItem__subtitle">{card.subtitle}</div>
         <img src={imgs[card.id]} alt="" />
      </div>
   );
};

export default CardsItem;