import React from 'react'

export const About = () => {
  return (
    <section id='about' className='p-10 md:p-12 bg-black text-yellow-500'>
      <div className='mx-auto my-0 max-w-screen-xl'>
        <h3 className='mb-10 w-full text-3xl md:text-7xl lg:text-8xl font-bold'>Hi, nice to meet&nbsp;you</h3>
        <p className='text-xl font-serif md:w-2/3'>I am Gabriel Costa, B.Sc. in Computer Science from Universidade
  Federal do Rio Grande do Sul - elected the best Computer Science College in
  Brazil (2014). I have experience developing on both back and front-end of
  websites and web-based applications (B2B and B2C) in Node.js, C#/ASP.NET
  and Python for the back-end and HTML, CSS (vanilla, preprocessed and tailwind) 
  and JavaScript (including react and vue) for the front-end. 
  I also have experience with both SQL and NoSQL databases.</p>
      </div>
    </section>
  )
}

About.displayName = 'About';