import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__social'>
    <a href="https://www.linkedin.com/in/mubashir-bashir-962a69196/" target='_blank'><BsLinkedin/></a>
    <a href="https://github.com/Mubashir78905" target='_blank'><BsGithub/></a>
    
    <a href="https://facebook.com" target='_blank'><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocial
