 import './map.css';
// LIFTS
import lifts from './../../img/lifts_chunkurhak.jpg';
 import lift_1 from './../../img/lift_1.jpg';
 import lift_2 from './../../img/lift_2.jpg';
 import lift_3 from './../../img/lift_3.jpg';
 import lift_4 from './../../img/lift_4.jpg';
 import lift_5 from './../../img/lift_5.jpg';
 import lift_6 from './../../img/lift_6.jpg';
 import { motion } from 'framer-motion';

// FOOD

import food_1 from './../../img/food_1.jpg';
import food_2 from './../../img/food_2.jpg';
import food_3 from './../../img/food_3.jpg';
import food_4 from './../../img/food_4.jpg';
import food_5 from './../../img/food_5.jpg';
import food_6 from './../../img/food_6.jpg';
import food_7 from './../../img/food_7.jpg';
import food_8 from './../../img/food_8.jpg';
import food_9 from './../../img/food_9.jpg';
import food_10 from './../../img/food_10.jpg';
import food_11 from './../../img/food_11.jpg';
import food_12 from './../../img/food_12.jpg';
import food_13 from './../../img/food_13.jpg';
import food_14 from './../../img/food_14.jpg';
import food_15 from './../../img/food_15.jpg';
import food_16 from './../../img/food_16.jpg';

//  SWIPER
 import './map.css';
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Pagination, Navigation } from 'swiper/modules';
 import { EffectCoverflow } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/pagination';


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
 const Map = () => {
    return (
        <div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        className="map">
           
        
            <div className="parallax">
                <div className="about__main">
                        <div className="container">
                            <div id='map' className="headline">
                                <motion.h1 custom={1} variants={textAnimarion}>НАША КАРТА ↓</motion.h1>
                            </div>
                        </div>
                </div>
            </div>
            <div className="container">
                <div className="lifts">
                    <img src={lifts} alt="" />
                    
                </div>
            </div>


                    <div id='lifts' className="parallax_four">
                        <div className="container">
                            <div className="about__main">
                                <div className="headline">
                                    <motion.h1 custom={1} variants={textAnimarion}>НАШИ ПОДЪЕМНИКИ ↓</motion.h1>
                                    <motion.h4 custom={2} variants={textAnimarion}>Самые безопасные, удобные и быстрые</motion.h4>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="container">
                    <div className="lifts_main">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                            >
                        
                            
                                
                            <SwiperSlide className='slide__one'>
                            <h3><span>«ОРАНЖЕВЫЙ»</span> двухместный кресельный подъемник</h3>
                            <img src={lift_1} />  
                            </SwiperSlide>
                            <SwiperSlide className='slide__two'>
                            <h3><span>«БЕЛЫЙ»</span> четырехместный кресельный подъемник</h3>
                            <img src={lift_2} />
                            </SwiperSlide>
                            <SwiperSlide className='slide__tree'>
                            <h3><span>«ЗЕЛЁНЫЙ»</span> трехместный кресельный подъемник</h3>
                            <img src={lift_3} />
                            </SwiperSlide>
                            <SwiperSlide className='slide__four'>
                            <h3><span>«СИНИЙ»</span> четырехместный кресельный подъемник</h3>
                            <img src={lift_4} />
                            </SwiperSlide>
                            <SwiperSlide className='slide__five'>
                            <h3><span>«ЖЕЛТЫЙ»</span> четырехместный кресельный подъемник</h3>
                            <img src={lift_5} />
                            </SwiperSlide>
                            <SwiperSlide className='slide__six'>
                            <h3><span>«ДЕТСКИЙ»</span> ленточный подъемник</h3>
                            <img src={lift_6} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>


                <div className="parallax_five">
                        <div className="container">
                            <div className="about__main">
                                <div className="headline">
                                    <motion.h1 custom={1} variants={textAnimarion}>НАШ РЕСТОРАН И НОМЕРА ОТЕЛЕЙ ↓</motion.h1>
                                    <motion.h3 custom={2} variants={textAnimarion}>Лучшиие повара приготовят вам <br /> нациольные, вкусные и изысканные блюда, <br />
                                     а отели придоставят вам  комфортные, уютные и телые номера.
                                    </motion.h3>
                                </div>
                            </div>
                        </div>
                </div>
                        <div className="container">
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow, Pagination]}
                                className="mySwiper"
                                >
                                <SwiperSlide>
                                <img src={food_1} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_2} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_3} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_4} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_5} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_6} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_7} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_8} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_9} />
                                </SwiperSlide> 
                                <SwiperSlide>
                                <img src={food_10} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_11} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_12} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_13} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_14} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_15} />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={food_16} />
                                </SwiperSlide>
                            </Swiper>  
                        </div>
        </div>
        
    )
}

export default Map;