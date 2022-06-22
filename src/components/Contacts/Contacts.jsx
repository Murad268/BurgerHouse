import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup'
import SuccesModal from '../SuccesModal/SuccesModal';
import './contacts.css'
import Map from '../map/Map';
import tel from '../../assets/images/contacts/tel.png'
import address from '../../assets/images/contacts/location.png'
import email from '../../assets/images/contacts/email.png'
import time from '../../assets//images/contacts/time.png'
const Contacts = ({sendEmail }) => {
 
   const [send, setSend] = useState(false);
   const sent = (e) => {
      setSend(true)
      document.querySelector(".manMenuForm").reset()
   }
   const exit = () => {
      setSend(false)
   }
   return (
      <div id='contacts' className='contacts'>
        <SuccesModal exit={exit} send={send}/>
        <div style={{marginTop: "-70px", marginBottom: "30px"}} className="toHome"><NavLink to="/">HOME</NavLink></div>
        <div className="container">
           <h3 className="contacts__tittle">Contacts</h3>
           <div className="contact__wrapper">
              <div className="contacts__infos">
                  <div className="contacts__info">
                     <img src={tel} alt="" className="contacts__tel__icon" />
                     <div className="contacts__desc contacts__tel__desc"><span>Phone:</span>(012) 510 71 14</div>
                  </div>
                  <div className="contacts__info">
                     <img src={email} alt="" className="contacts__email__icon" />
                     <div className="contacts__desc contacts__email__desc"><span>E-mail:</span> mail@burgerhouse.com</div>
                  </div>
                  <div className="contacts__info">
                     <img src={address} alt="" className="contacts__adress__icon" />
                     <div className="contacts__desc contacts__adress__desc"><span>Address:</span> 6248 East Mockingbird Lane
Dallas, Texas 75214</div>
                  </div>
                  <div className="contacts__info">
                     <img src={time} alt="" className="contacts__time__icon" />
                     <div className="contacts__desc contacts__time__desc"><span>Club working hours:</span> 07:00-00:00 (daily)</div>
                  </div>
                  <h2 className="formTittle">Остались вопросы?</h2>
                  <Formik
                     initialValues = {{
                        name: '',
                        tel: '',
                        text: ''
                  }}
                  validationSchema = {Yup.object({
                        name: Yup.string().required('Please enter your name to contact us'),
                        tel: Yup.string().required('Please enter your number so we can contact you'),
                        text: Yup.string().required('Your feedback is very important to us')
                  })}
                  onSubmit  = { () => {
                     sent()  
                    
                     
                  }}
                  >
                     <Form action="#" className="manMenuForm">
                        <label className='manMenuFormLabel' htmlFor="name"> Your name </label>
                           <Field  placeholder='Name' type="text" id="name" name="name"/>
                           <FormikErrorMessage component="div" className="char__search-error" name="name" />   
                        <label className='manMenuFormLabel' htmlFor="tel"> your phone number</label>
                           <Field placeholder="your phone number" type="text" id="tel" name="tel"/>
                           <FormikErrorMessage component="div" className="char__search-error" name="tel" />   
                        <label className='manMenuFormLabel' htmlFor="text">your comment </label>
                           <Field as="textarea" placeholder='Comment' name="text" id="text"></Field>
                           <FormikErrorMessage component="div" className="char__search-error" name="text" />   
                           <button className="manMenuForm__button">Request a call</button>
                     </Form>
                  </Formik>
                  <div className="formTittle__alert">
                  By clicking on the button "Order a call", <a href="#">I consent to
                   processing of personal data.</a>
                  </div>
              </div>
              <Map/>
           </div>
        </div>
      </div>
   );
};

export default Contacts;