import React, {useState} from 'react';
import Good from './Good/Good';
import './goods.css'
const Goods = () => {
   const [goods, setGoods] = useState([
      {id: 0, name: "Lorem ipsum dolor", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},
      {id: 1, name: "Lorem ipsum dolor", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"},
      {id: 2, name: "Lorem ipsum dolor", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"}
   ])
   return (
      <section className='goods'>
         <h2 className="goods__title">Choose & Enjoy</h2>
         <p className="goods__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
         <div className="goods__wrapper">
            {
               goods.map(good => {
                  return <Good key={good.id} good={good}/>
               })
            }
         </div>
      </section>
   );
};

export default Goods;