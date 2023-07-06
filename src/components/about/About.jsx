import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
   <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

    <div className="about__content">
      <div className="about__cards">

        <article className="about__card">
           <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years Working</small>
        </article>
      

        <article className="about__card">
           <FiUsers className='about__icon'/>
          <h5>Cients</h5>
          <small>200+ Client WorldWide</small>
        </article>
    
        <article className="about__card">
           <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>88+ Completed</small>
        </article>
    </div>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis culpa minus dolores repudiandae esse accusamus suscipit, eum, incidunt amet veritatis molestias, nesciunt saepe. Cupiditate voluptatem quasi tenetur, praesentium nobis voluptates possimus molestias commodi, sapiente totam eveniet doloremque fugit, laboriosam assumenda. Sed saepe sapiente minima autem labore ipsum perferendis excepturi, porro error explicabo ab. Corrupti molestias fuga aliquam illo perspiciatis.
    </p>

    <a href="#contact" className='btn btn-primary'>Let's Talk</a>


    </div>
    </div>
   </section>
  )
}

export default About
