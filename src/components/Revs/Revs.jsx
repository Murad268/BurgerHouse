import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import RevsHeader from './RevsHeader/RevsHeader';
import RevsBody from './RevsBody/RevsBody';
const Revs = () => {
   const [reviews, setReviews] = useState([
      {id: 1, fullName: "Arnold Urosima", review: "I was with you yesterday. Your sandwiches are great. I advise everyone. True, the service is a bit poor. But you can be forgiven for the taste of the food", evaluation: true},
      {id: 2, fullName: "Daniel Lakosta", review: "You are truly magnificent. I admire your burger, especially for vegans. I will come soon and eat it madly", evaluation: true},
      {id: 3, fullName: "Mariya Ambrella", review: "Let the service you provide hit you in the head. Everything is so bad that I even threw away the food", evaluation: false},
      {id: 4, fullName: "Jasmin Agamedova", review: "The service is really bad. But burgers are out of the question", evaluation: true},
      {id: 5, fullName: "Xuanina Roskol", review: "TI would suggest replacing the staff with some smiling people. Or I do not see your end well. The service is really bad", evaluation: true}
   ])
   let good = 0;
   let bad = 0;
   const[term, setTerm] = useState("all");
   const filterTerm = (filter) => {
      setTerm(filter)
   }
   const addRev = (e, rev) => {
      e.preventDefault();
      setReviews(prevs => {
         return [...prevs, rev]
      })
   }
   const filter = (items, bool) => {
      switch(bool) {
         case "all":
            return items;
         case true:
            return items.filter(item => item.evaluation);
         case false:
            return items.filter(item => item.evaluation == false);
      }
   }

   const calculateEvalution = () => {
      reviews.forEach(item => {
         if(item.evaluation) {
            good+=1
         } else {
            bad+=1
         }
      })
   }
   calculateEvalution()
   const deleteRev = (id) => {
      setReviews(prevs => {
         return  prevs.filter(prev => {
            
               return prev.id != id
           
         })
      })
   }
 

   const changeEvalution = (id) => {
      setReviews(prevs => {
         return prevs.map(prev => {
            if(prev.id === id) {
               return {...prev, evaluation: !prev.evaluation}
            } else {
               return prev
            }
         })
      })
   }
   
   return (
      <>
         <div style={{marginTop: "10px", marginLeft: "10px"}} className="toHome"><NavLink to="/">HOME</NavLink></div>
         <RevsHeader filterTerm={filterTerm} bad={bad} good={good} reviews={reviews}/>
         <RevsBody addRev={addRev} changeEvalution={changeEvalution} deleteRev={deleteRev} reviews={filter(reviews, term)}/>
      </>
   );
};

export default Revs;