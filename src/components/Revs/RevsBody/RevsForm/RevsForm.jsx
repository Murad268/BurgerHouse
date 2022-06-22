import React, {useState} from 'react';
import './revsForm.css';
import nextId from "react-id-generator";
const RevsForm = ({addRev}) => {
   let id = nextId()
   
   const [value, setValue] = useState({
      fullName: "",
      review: "",
      evaluation: ""
   })
   const add = (e) => {
      e.preventDefault()
      if(value.fullName != "" && value.evaluation != "empty" ) {
         addRev(e, {...value, id});
      } 
   }

   return (
      <div className='revsForm'>
        
         <form onSubmit={add} action="" className="form">
            <input onChange={e => setValue(prev => ({...prev, fullName: e.target.value}))} type="text" id="fullName" />
            <input onChange={e => setValue(prev => ({...prev, review: e.target.value}))} type="text" id="rev" />
            <select onChange={e => setValue(prev => ({...prev, evaluation: e.target.value == "true"?true:false}))} name="" id="eval">
               <option value="empty">select your evaluation</option>
               <option value="true">Good</option>
               <option value="false">Bad</option>
            </select>
            <button  id="addRev">Add your review</button>
         </form>
      </div>
   );
};

export default RevsForm;