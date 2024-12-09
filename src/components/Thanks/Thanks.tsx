import React from 'react'

export const Thanks = () => {
  return (
    <section className='p-10 md:p-12 bg-black text-white'>
      <div className='mx-auto my-0 max-w-screen-xl flex flex-col items-center'>
        <p className='text-3xl md:text-7xl lg:text-8xl text-center mb-10 font-anton'>Thanks for visiting, here's a cat!</p>
        <picture className='border-4 border-white rounded'>
          <img width={600} src='https://cataas.com/cat?height=600' alt='Cat'  />
        </picture>
      </div>
    </section>
  )
}

Thanks.displayName = 'Thanks'