import React from 'react';
import './revsHeader.css'
const RevsHeader = ({reviews, good, bad, filterTerm}) => {
   return (
      <div className='revsHeader'>
         <div className="revsHeader__block bg-primary">
            <div onClick={e =>  filterTerm("all")} className="all bg-dark">
               <p>All reviews: <span>{reviews.length}</span></p>
            </div>
            <div onClick={e =>  filterTerm(true)} className="good bg-success">
               <p>Good reviews: <span>{good}</span></p>
            </div>
            <div onClick={e =>  filterTerm(false)} className="bad bg-danger">
               <p>Bad reviews: <span>{bad}</span></p>
            </div>
         </div>
      </div>
   );
};

export default RevsHeader;