import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import {Pagination } from "swiper";


const data=[
  {
    avatar: AVTR1,
    name: "its_mobi",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis architecto asperiores explicabo et aut quod sed."
  },
  {
    avatar: AVTR2,
    name: "its_mobi",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis architecto asperiores explicabo et aut quod sed."
  },
  {
    avatar: AVTR3,
    name: "its_mobi",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis architecto asperiores explicabo et aut quod sed."
  },
  {
    avatar: AVTR4,
    name: "its_hani",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis architecto asperiores explicabo et aut quod sed."
  }
]


const Testimonial = () => {
  return (
   <section id="testimonials">
    <h5>Review from Clients</h5>
    <h2>Testimonials</h2>

     <Swiper
        slidesPerView={1}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="container testimonials__container"
      >
      {
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
      }
     
    </Swiper>
   </section>
  )
}

export default Testimonial
