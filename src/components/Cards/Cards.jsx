import React, {useState} from 'react';
import CardsItem from './CardsItem/CardsItem';
import './cards.css';
const Cards = () => {
   const [cards, setCards] = useState([
      {id: 0, subtitle: "Most Popular Burger"},
      {id: 1, subtitle: "More fun more taste"},
      {id: 2, subtitle: "Fresh & Chili"}
   ])
   return (
      <div className='cards container'>
         <div className="cards__wrapper">
            {
               cards.map(card => {
                  return <CardsItem key={card.id} card={card}/>
               })
            }
         </div>
         <button className="cards__button">
            Always Tasty Burger
         </button>
      </div>
   );
};

export default Cards;