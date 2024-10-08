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
        I am a software developer with a <span className='font-medium'>strong passion for solving complex problems </span>through technology. I am currently a <span className='font-medium'>undergraduate student</span> pursuing a <span className='font-medium'>bachelor degree in computer science</span> and a <span className='font-medium'>minor in mathematics.{` `}</span>
        My interest with tech began when I was a kid, and it has evolved into a passion for building software to solve complex problems.
        I have experience in <span className='font-medium'>web development, mobile apps, and back-end server</span>, and I am constantly expanding my skillset. I enjoy tackling challenges and learning new technologies.
        My goal is to become a <span className='font-medium'>full-stack developer</span> to contribute to projects that combine innovation with real-world impact.
      </p>

      <p>
        <span className='italic'>When I am not coding</span> I enjoy playng video games, watching Anime, reading Mangas.{` `}
        <span className="font-medium">I am also picking up drawing as a hobby</span>
      </p>
    </motion.section>
  )
}
