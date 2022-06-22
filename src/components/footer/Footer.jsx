import React, {useState} from 'react';
import './footer.css';
import footerLogo from '../../assets/images/footer/footerLogo.png';
import location from '../../assets/icons/footer/location_icon_5474.png';
import email from '../../assets/icons/footer/email_5473.png';
import FooterLink from './FooterLink/FooterLink';
const Footer = () => {
   const [links, setLinks] = useState([
      {id: 0, link: ""},
      {id: 1, link: ""},
      {id: 2, link: ""},
      {id: 3, link: ""}
   ])
   return (
      <div className='footer container'>
  
         <div className="footer__wrapper">
            <div className="footer__descs">
               <div className="footer__logo">
                  <img src={footerLogo} alt="" />
               </div>
               <div className="footer__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis.
               </div>
            </div>
            <div className="footer__address">
               <div className="footer__address__item">
                  <img src={location} alt="" />
                  Main Road, Building Name, Country
               </div>
               <div className="footer__address__item">
                  <img src={email} alt="" />
                  info@companyname.com
               </div>
            </div>
         </div>
         <div className="footer__footer">
            <div className="copirate">© Company Name 2020. All rights reserved.</div>
            <div className="footer__links">
              {
               links.map(link => {
                  return <FooterLink key={link.id} link ={link} />
               })
              }
            </div>
         </div>
        
      </div>
   );
};

export default Footer;