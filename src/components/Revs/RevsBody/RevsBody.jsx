import React from 'react';
import RevsItem from './RevsItem/RevsItem';
import './revsBody.css'
import RevsForm from './RevsForm/RevsForm';
const RevsBody = ({reviews, deleteRev, changeEvalution, addRev}) => {
   return (
      <>
         <div className='revsBody bg-success'>
         {
            reviews.map(item => {
               return <RevsItem changeEvalution={changeEvalution} key={item.id} deleteRev={deleteRev} item = {item}/>
            })
         }
      </div>
      <RevsForm addRev={addRev}/>
      </>
   );
};

export default RevsBody;