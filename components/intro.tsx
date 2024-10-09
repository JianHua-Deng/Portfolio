"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useActiveSectionContext } from '@/context/active-section-context';

import { useSectionInView } from '@/lib/hooks';

export default function Intro() {

  const {ref} = useSectionInView('Home', 0.5)
  const {setActiveSection, setTimeofLastClick} = useActiveSectionContext();

  return (
    <section id='home' ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[200rem]'>
        <div className="flex items-center justify-center">
          <div className='relative'>
            
            <motion.div
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image src="https://i.imgur.com/J9WWYtJ.png" alt="Portrait" width="256" height="256" quality="95" priority={true}
              className='rounded-full h-36 w-36 border-[0.20rem] border-white object-cover shadow-xl'/>
            </motion.div>
            <motion.span className='text-4xl absolute bottom-0 right-0'
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type: 'spring',
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              😘
            </motion.span>
          </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
        >
          <span className='font-extrabold'>{`Hello, I'm Jianhua,`}</span> I'm currently a{" "}
          <span className='font-extrabold'>Undergraduate Student from Hunter College.</span> I enjoy doing
          <span className='italic'> web-devs and app developments</span>
        </motion.h1>

        <motion.div className='flex flex-col justify-center sm:flex-row gap-5 px-4 text-lg font-medium'
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{
            delay: 0.1,
          }}
        >
          <Link href="#contact" className='group cursor-pointer bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection("Contact")
            setTimeofLastClick(Date.now())
          }}
          >
          Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-.25 transition'/>
          </Link>
          <a className='group cursor-pointer bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/80 dark:hover:text-gray-100' href="/CV.pdf" download={true}>
            Download Resume<HiDownload className='group-hover:translate-y-1 transition opacity-60'/>
          </a>
          <a className='bg-white cursor-pointer p-4 text-gray-700 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/80 dark:hover:text-gray-100' href='https://linkedin.com/in/jianhua-deng/' target='_blank'>
            <BsLinkedin/>
          </a>
          <a className='bg-white cursor-pointer p-4 text-gray-700 flex items-center justify-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/80 dark:hover:text-gray-100' href='https://github.com/jianhua-deng' target='_blank'>
            <FaGithubSquare/>
          </a>
        </motion.div>
    </section>
  )
}
