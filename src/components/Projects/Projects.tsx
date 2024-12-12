import React from 'react'
import { Project } from '.'

type Props = {
  projects: Project[]
}

export const Projects = (props: Props) => {
  const { projects } = props
  return (
    <section id='projects' className='p-10 md:p-12 bg-yellow-500'>
      <div className='mx-auto my-0 max-w-screen-xl'>
        <h3 className='mb-10 w-full text-3xl md:text-7xl lg:text-8xl font-bold'>Projects</h3>
        <div className='flex flex-col md:flex-row justify-between gap-10'>
          {projects.map((project: Project) => 
              <a href={project.link} target="_blank" key={project.title}>
                <picture>
                  <img className='mb-8 border-4 border-yellow-300 rounded' src={project.image} alt={project.title} loading="lazy"  />
                </picture>
                <h4 className='font-bold'>{project.title}</h4>
                <p className='font-serif'>{project.description}</p>
              </a>
          )}
        </div>
      </div>
    </section>
  )
}

Projects.displayName = 'Projects';