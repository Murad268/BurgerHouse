import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import GoodMenuItem from './GoodMenuItem/GoodMenuItem';
import './goodMenu.css';
import first from '../../assets/images/menu/first.png';
import second from '../../assets/images/menu/second.png';
import third from '../../assets/images/menu/third.png';
import fourth from '../../assets/images/menu/fourth.png';
import fifty from '../../assets/images/menu/fifty.png';
const GoodMenu = () => {
   const [goods, setGoods] = useState([
      {id: 0, name: "OUR REGULAR BURGER", assertment: [
         {id: 0, name: "VEG. BURGER", price: 1.20},
         {id: 1, name: "HAM BURGER", price: 1.20},
         {id: 2, name: "CHICKEN BURGER", price: 1.40}
      ]},
      {id: 1, name: "OUR BURGER (served with Fries)", assertment: [
         {id: 0, name: "VEG. BURGER", price: 1.45},
         {id: 1, name: "HAM BURGER", price: 1.60},
         {id: 2, name: "CHICKEN BURGER", price: 1.70},
         {id: 3, name: "CHRUNCHY CHICKEN BURGER", price: 2.10},
         {id: 4, name: "GRILL CHICKEN BURGER", price: 2.10},
         {id: 5, name: "Additional Cheese", price: 0.50},
      ]},
      {id: 2, name: "OUR CRUNCHY FRIED CHICKEN", assertment: [
         {id: 0, name: "1 PIECE", price: 1.40},
         {id: 1, name: "2 PIECES", price: 2.70},
         {id: 2, name: "4 PIECES", price: 5.20},
         {id: 3, name: "8 PIECES", price: 1.000},
         {id: 4, name: "CHICKEN STRIPS", price: 2.95},
         {id: 5, name: "HOT WINGS (6 pcs.)", price: 2.80},
         {id: 6, name: "CHICKEN DRUMSTICKS (6 pcs.)", price: 2.80}
      ]},
      {id: 3, name: "OUR HOT DOG", assertment: [
         {id: 0, name: "BUFF HOT DOG", price: 1.40},
         {id: 1, name: "CHICKEN HOT DOG", price: 1.60}
      ]},
      {id: 4, name: "OUR SANDWICH", assertment: [
         {id: 0, name: "VEG. SANDWICH", price: 1.35},
         {id: 1, name: "CHICKEN SANDWICH", price: 1.60},
         {id: 2, name: "CHEESE SANDWICH", price: 1.30},
         {id: 3, name: "CLUB SANDWICH", price: 2.50}
      ]}
   ])
   return (
      <div className='goodMenu'>
         <img src={first} alt="" className="first" />
         <img src={second} alt="" className="second" />
         <img src={third} alt="" className="third" />
         <img src={fourth} alt="" className="fourth" />
         <img src={fifty} alt="" className="fifty" />
         <div className="toHome"><NavLink to="/">HOME</NavLink></div>
         <div className="container">
            <div className="goodMenu__wrapper">
               <div>
                  {
                     goods.map(good => {
                        return <GoodMenuItem key={good.id} good={good}/>
                     })
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default GoodMenu;