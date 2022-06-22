import React from 'react';
import './goodMenuItem.css';

const GoodMenuItem = ({good}) => {
   return (
      <>
         <h5 className='goodItems__tittle'>{good.name}</h5>
         <div className="goodMenuItemName">
            {
               good.assertment.map(item => {
                  return (
                        <div key={item.id} className="goodItems">
                           <div className="goodItemsItem">{item.name}</div>
                           <div className="goodItemsPrice">${item.price}</div>
                        </div>
                  )
               })
            }
         </div>
      </>
   );
};

export default GoodMenuItem;