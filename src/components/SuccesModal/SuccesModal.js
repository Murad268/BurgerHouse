import React from 'react';
import './succesModal.css'
import succes from '../../assets/icons/modalform/succes.png'
import close from '../../assets/icons/modalform/close.png'
const SuccesModal = ({send, exit}) => {
   let className = send == false?"SuccesModal":"SuccesModal SuccesModal__active"
   return (
      <div className={className}>
         <div onClick={exit} className="success__exit">
               <img src={close} alt="" />
         </div>
         <div className="succesModal__block">        
               <div className="succes__img">
                  <img src={succes} alt="" />
               </div>
               <div className="succes__desc">Sizin bildirişiniz uğurla yerinə çatdırılmışdır. Sizinlə tezliklə əlaqə saxlanılacaq</div>
         </div>
      </div>
   );
};

export default SuccesModal;