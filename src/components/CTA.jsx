/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
   <p className='cta-text'>
     Have a project in mind?
     <br className='sm:block hidden'/>
     Let's build something together!
   </p>
   <Link to='/Portfolio-karan/contact' className="btn">
    Contact
   </Link>
    </section>
  )
}

export default CTA;
