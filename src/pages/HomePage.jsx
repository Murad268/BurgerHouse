import React from 'react';
import Header from '../components/HeaderSection/Header/Header';
import Cards from '../components/Cards/Cards';
import Goods from '../components/Goods/Goods';
import UpComing from '../components/UpComing/UpComing';
import Reservation from '../components/Reservation/Reservation';
const HomePage = () => {
   return (
      <>
         <Header/>
         <Cards/>
         <Goods/>
         <UpComing/>
         <Reservation/>
      </>
   );
};

export default HomePage;