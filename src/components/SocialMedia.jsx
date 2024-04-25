import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ericrhudson/'>
            <BsLinkedin/>
          </a>
        </div>
        <div>
          <a target='-blank' rel='noreferrer' href='https://www.instagram.com/ehud____?igsh=Ym45dzdzbnVuc2h5&utm_source=qr'>
            <BsInstagram/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia