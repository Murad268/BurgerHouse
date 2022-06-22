import React from 'react';
import insta from '../../../assets/icons/footer/instagram_5164.png';
import face from '../../../assets/icons/footer/facebook_5163.png';
import twitter from '../../../assets/icons/footer/twitter_5162.png';
import wp from '../../../assets/icons/footer/whatsapp_5161.png';
const FooterLink = ({link}) => {
   const links = [
      insta,
      face,
      twitter,
      wp
   ]
   return (
      <div>
         <a href={link.link}><img src={links[link.id]} alt="" /></a>
      </div>
   );
};

export default FooterLink;