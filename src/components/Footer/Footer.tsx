import React from 'react'

export const Footer = () => {
  return (
    <footer className='p-5 bg-black w-full'>
      <div className='flex flex-row justify-end  py-0 md:py-5 px-5 gap-5'>
        <a href='https://github.com/gcgoncalves'  target='_blank' aria-label='Visit my github profile'>
          <div className=' h-8 w-8 bg-cover bg-[url("/images/github.svg")] hover:bg-[url("/images/github-yellow.svg")]'></div>
        </a>
        <a href='https://linkedin.com/in/gcgoncalves' target='_blank' aria-label='Visit my linkedin profile'>
          <div className=' h-8 w-8 bg-cover bg-[url("/images/linkedin.svg")] hover:bg-[url("/images/linkedin-yellow.svg")]'></div>
        </a>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'