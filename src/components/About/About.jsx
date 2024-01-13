import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';



import './about.css';
import 'swiper/css';




const textAnimarion = {
  hidden: {
      x: -900,
      opacity: 0,
  },
  visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom*0.5 },
  }),
}
export default function About() {
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.3, once: true }}
    className='about'>

            <div className="parallax_first">
                <div className='container'>
                    <div className="about__main">
                        <div className="headline">
                            <motion.h1 custom={1} variants={textAnimarion}>СЕЗОН 2023-2024 <br /> <span>ОТКРЫТ!!!</span></motion.h1>
                            <motion.h4 custom={2} variants={textAnimarion}>Катание на лыжах и сноуборде в Кыргызстане <br /> – это отличный зимний отдых в горах!</motion.h4>
                        </div>
                    </div>
                </div>
            </div>
        
      
    </motion.div>
  );
}
