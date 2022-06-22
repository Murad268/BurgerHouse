import React from 'react';
import './revsItem.css'
const RevsItem = ({item, deleteRev, changeEvalution}) => {
   let className = "revsItem";
   let del = "revsItem__delete"
   if(!item.evaluation) {
      className += " revsItem__false"
      del+= " revsItem__delete__active"
   }
   return (
      <div onClick={e=>changeEvalution(item.id)} className={className}>
         <div onClick={e=>deleteRev(item.id)} className={del}>␡</div>
         <div className="revsItem__name">{item.fullName}</div>
         <div className="revsItem__review">{item.review}</div>
      </div>
   );
};

export default RevsItem;