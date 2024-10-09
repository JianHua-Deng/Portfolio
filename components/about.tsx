"use client";

import React from 'react'
import SectionHeader from './section-header'
import { motion } from 'framer-motion'

import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const{ref} = useSectionInView('About')
  
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        ref={ref}
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.175}}
        id='about'
    >
      <SectionHeader>About me</SectionHeader>
      <p className='mb-3'>
        I am a software developer with a <span className='font-medium'>strong passion for solving complex problems </span>through technology. I am currently a <span className='font-extrabold'>Undergraduate student</span> pursuing a <span className='font-extrabold'>Bachelor degree in Computer Science</span> and a <span className='font-extrabold'>Minor in Mathematics.{` `}</span>
        I have experience in <span className='font-extrabold'>web development, mobile apps, and back-end development</span>, and I am constantly expanding my skillset. I enjoy tackling challenges and learning new technologies.
        My goal is to become a <span className='font-medium'>full-stack developer</span> to contribute to projects that combine innovation with real-world impact.
      </p>

      <p>
        <span className='italic'>When I am not coding</span> I enjoy playng video games, watching Anime, reading Mangas.{` `}
        <span className="">I am also picking up drawing as a hobby</span>
      </p>
    </motion.section>
  )
}
