import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Pagination, EffectCoverflow } from "swiper/modules";

import { Role } from './';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './styles.css'

const RoleCard = (props: { role: Role }) => {
  const { role } = props;
  return (
      <div className='h-full lg:min-h-96 lg:aspect-video p-10 bg-white text-left text-black rounded'>
        <div className='flex flex-row items-center align-end gap-6 mb-4'>
          <img 
            className={`${role.logoAspect === 'square' ? ' w-12 h-12' : 'w-24 aspect-video'}`} 
            src={role.logo} 
            alt={role.company}  
          />
          <div>
            <h4 className='font-bold text-xl'>{role.company}</h4>
            <h5 className='italic text-lg'>{role.role}</h5>
          </div>
        </div>
        <p className='mb-4'>
          <span className='font-bold'>Period:</span> {role.startDate} - {role.endDate}
        </p>
        {role.responsibilities && 
          <>
            <h6 className='mb-4 font-bold'>Responsibilities</h6>
            <ul className='mb-4 ml-4 list-disc list-outside'>
              {role.responsibilities.map(task => <li key={task}>{task}</li>)}
            </ul>
          </>
        }
        <p><span className='font-bold'>Stack:</span> {role.stack}</p>
      </div>
  )
}

export const Experience = (props: { roles: Role[] }) => {
  const { roles } = props
  return (
    <section id='experience' className='p-10 md:p-12 text-yellow-500 bg-black'>
      <div className='mx-auto my-0 max-w-screen-xl flex flex-col align-center justify-center'>
        <h3 className='mb-10 w-full text-3xl md:text-7xl lg:text-8xl font-bold'>Experience</h3>
        <div className='mb-5 h-[45rem] md:h-[38rem] lg:h-auto'>
          <Swiper
            className='h-full'
            keyboard={{ enabled: true }}
            mousewheel={true}
            pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 1,
              depth: 150,
              modifier: 1,
              slideShadows: true
            }}
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
            dir={'rtl'}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
            }}
            modules={[Keyboard, Mousewheel, Pagination, EffectCoverflow]}
          >
            {roles.map(role => 
              <SwiperSlide dir="ltr">
                <RoleCard key={`${role.role} at ${role.company}`} role={role} />
              </SwiperSlide>)}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

Experience.displayName = 'Experience';