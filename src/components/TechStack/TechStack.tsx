import React, { useRef } from 'react';
import {
  useScroll,
  motion,
  useTransform,
} from "framer-motion";


export const TechStack = () => {
  const techStack = useRef(null);

  const tailwindX = -180;
  const tsX = 130;
  const reactX = 350;
  const vueX = 550;
  const pythonX = 850;
  const dockerX = 1010;

  const small = 80;
  const medium = 90;
  const large = 120;

  const { scrollYProgress } = useScroll();
  const tsY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const tailwindY = useTransform(scrollYProgress, [0, 1], [-30, 80]);
  const reactY = useTransform(scrollYProgress, [0, 1], [-350, 50]);
  const vueY = useTransform(scrollYProgress, [0, 1], [50, -230]);
  const pythonY = useTransform(scrollYProgress, [0, 1], [-210, -30]);
  const dockerY = useTransform(scrollYProgress, [0, 1], [-130, 250]);

  return (
    <section id='tech-stack' className='py-10 px-0 md:px-10 md:p-12 overflow-hidden'>
      <div className='mx-auto my-0 max-w-screen-xl relative block p-5 md:p-20' ref={techStack}>
        <h3 className='relative text-9xl font-bold text-center font-anton -z-20'>Tech Stack</h3>
        <motion.div
          className='invisible md:visible inline-block absolute -z-10'
          style={{y: tsY, x: tsX}}
          initial="hidden"
          whileInView="visible"
        >
          <img src="/images/ts.svg" width={medium} alt="TypeScript" loading="lazy" />
        </motion.div>
        <motion.div
          className='invisible md:visible inline-block absolute -z-30' 
          style={{y: reactY, x: reactX}} 
          initial="hidden"
          whileInView="visible"
        >
          <img src="/images/react.svg" width={large} alt="React" loading="lazy" />
        </motion.div>
        <motion.div
          className='invisible md:visible inline-block absolute -z-10' 
          style={{y: vueY, x: vueX}} 
          initial="hidden"
          whileInView="visible"
        >
          <img src="/images/vue.svg" width={medium} alt="Vue" loading="lazy" />
        </motion.div>
        <motion.div
          className='invisible md:visible inline-block absolute -z-30' 
          style={{y: pythonY, x: pythonX}} 
          initial="hidden"
          whileInView="visible"
        >
          <img src="/images/python.svg" width={small} alt="Python" loading="lazy" />
        </motion.div>
        <motion.div
          className='invisible md:visible inline-block absolute -z-30' 
          style={{y: tailwindY, x: tailwindX}} 
          initial="hidden"
          whileInView="visible"
        >
          <img src="/images/tailwind.svg" width={large} alt="Tailwind" loading="lazy" />
        </motion.div>
        <motion.div
          className='invisible md:visible inline-block absolute -z-30' 
          style={{y: dockerY, x: dockerX}} 
          initial="hidden"
          whileInView="visible"
        >
          <img src="/images/docker.svg" width={large} alt="Docker" loading="lazy" />
        </motion.div>
      </div>
      <div className='flex flex-row flex-wrap justify-items-center justify-around lg:mx-auto lg:max-w-[900px]'>
        <div>
          <h4 id="front-end-header" className='font-bold'>Front-end</h4>
          <ul className='list-disc pl-5' aria-labelledby="front-end-header">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Vue</li>
            <li>CSS</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div>
          <h4 id="back-end-header" className='font-bold'>Back-end</h4>
          <ul className='list-disc pl-5' aria-labelledby="back-end-header">
            <li>Node.js</li>
            <li>Python</li>
            <li>C#</li>
            <li>Ruby/Rails</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>
        </div>
        <div>
          <h4 id="tools-header" className='font-bold'>Tools</h4>
          <ul className='list-disc pl-5' aria-labelledby="tools-header">
            <li>Git</li>
            <li>Docker</li>
            <li>Ansible</li>
            <li>Shellscript</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

TechStack.displayName = 'TechStack';