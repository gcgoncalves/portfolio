import React from 'react'

export function Hero() {
  return (
    <section className="p-10 md:p-12 md:p-32 lg:p-64 bg-yellow-500">
      <div className='mx-auto my-0 max-w-screen-xl grid grid-cols-1 md:grid-cols-2'>
        <div className='pb-8 md:pb-0 md:pr-16'>
          <h1 className='text-6xl md:text-6xl lg:text-9xl font-anton'>Gabriel</h1>
          <h1 className='text-6xl md:text-6xl lg:text-9xl text-right font-anton'>Costa</h1>
          <h2 className='block pr-[1px] lg:pr-[3px] text-xl md:text-2xl lg:text-3xl text-right font-bold'>Web Developer</h2>
        </div>
        <div className='pt-8 md:pt-0 md:pb-0 md:pl-16 font-bold border-t-4 md:border-t-0 md:border-l-4 border-black border-solid'>
          <menu className='h-full grid grid-cols-1 gap-1 md:gap-4 place-content-around'>
            <span><a className='text-xl md:text-3xl lg:text-5xl hover:underline' href="#about" aria-label='About'>About</a></span>
            <span><a className='text-xl md:text-3xl lg:text-5xl hover:underline' href="#tech-stack" aria-label='Technology'>Technology</a></span>
            <span><a className='text-xl md:text-3xl lg:text-5xl hover:underline' href="#experience" aria-label='Experience'>Experience</a></span>
            <span><a className='text-xl md:text-3xl lg:text-5xl hover:underline' href="#projects" aria-label='Projects'>Projects</a></span>
          </menu>
        </div>
      </div>
    </section>
  )
}

Hero.displayName = 'Hero'