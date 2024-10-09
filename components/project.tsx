"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import { projectsData } from '@/lib/data'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion';

type ProjectProps = typeof projectsData[number]

export default function Project({ title, description, tags, imageUrl, link}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"], //[When the bottom of the viewport crosses the top of the target, End animation when the bottom of the viewport has gone 33% beyond the end of the target]

  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div ref={ref} style={{
        scale: scaleProgress,
        opacity: opacityProgress,
    }} 
        className='group mb-3 sm:mb-8 last:mb-0'
    >
        <a href={link} target='_blank'>
          <section
          className=' bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
            <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
              <h3 className='text-2xl font-semibold'>{title}</h3>
              <p className='mt-2 mb-5 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
              <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                {tags.map((tag, index) => (
                  <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' key={index}>{tag}</li>
                ))}
              </ul>        
            </div>
            <Image src={imageUrl} alt={title} quality={95} className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-1.04 hidden sm:block'/>
          </section>
        </a>
    </motion.div>
  )
}