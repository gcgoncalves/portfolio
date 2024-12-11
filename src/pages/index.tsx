import React, { useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Lenis from '@studio-freight/lenis'

import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { TechStack } from "../components/TechStack"
import { Experience } from "../components/Experience"
import { Projects } from "../components/Projects"
import { Thanks } from "../components/Thanks"
import { Footer } from "../components/Footer"

import { ROLES } from '../components/Experience'
import { PROJECTS } from "../components/Projects"

const IndexPage: React.FC<PageProps> = () => {
  const lenis = new Lenis()
  
  useEffect( () => {
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }, [])

  return (
    <main>
      <Hero lenis={lenis} />
      <About />
      <TechStack />
      <Experience roles={ROLES} />
      <Projects projects={PROJECTS} />
      <Thanks />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () =>  {
  return (
    <>
      <html lang="en" />
      <title>Gabriel Costa</title>
    </>
  )
}