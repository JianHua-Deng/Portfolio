"use client";

import React from 'react'
import SectionHeader from './section-header'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/server-actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {

    const {ref} = useSectionInView("Contact");

    return (
        <motion.section ref={ref} id='contact' className='mb-2 sm:mb-28 w-[min(100%, 38rem)] text-center'
            initial={{opacity: 0,}}
            whileInView={{opacity: 1,}}
            transition={{duration: 1}}
            viewport={{once: true}}
        >
            <SectionHeader>Contact Me</SectionHeader>
            <p className='text-gray-700 -mt-5 dark:text-white/80'>
                Feel free to contact me at <a className='underline' href='mailto:jianhua1203@gmail.com'>jianhua1203@gmail.com</a> or through this form
            </p>
            <form className='mt-10 flex flex-col' action={async (formData) => {
                const {data, error} = await sendEmail(formData);

                if(error){
                    toast.error(error)
                    return;
                }
                toast.success("Email sent successfully");

            }}>
                <input className='h-14 rounded-lg px-4 borderBlack dark:bg-gray-600 dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' type="email" name='senderEmail' placeholder='Your Email' required maxLength={500}/>
                <input className='h-14 mt-3 rounded-lg px-4 borderBlack dark:bg-gray-600  dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none  transition-all' type="text" name='subject' placeholder='Subject' required maxLength={100}/>
                <textarea className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-gray-600  dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none  transition-all' placeholder='Your message' name='message' required/>
                <div className='w-full mt-2 flex justify-end'>
                    <SubmitBtn/>
                </div>
            </form>
        </motion.section>
    )
}
