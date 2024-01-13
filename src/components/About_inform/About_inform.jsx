import './about_inform.css';
import blockImageOne from './../../img/about_1.webp';
import blockImageTwo from './../../img/about_2.jpg';
import blockImageThree from './../../img/about_3.webp';
import { motion } from 'framer-motion';


const textAnimarion = {
    hidden: {
        y: -900,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom*0.5 },
    }),
  }


const About_inform = () => {

    return (
        <div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        id='about' className="inform">
            <div className="container">
                <motion.h2 custom={1} variants={textAnimarion}>ГОРНОЛЫЖНЫЙ КОМПЛЕКС ЧУНКУРЧАК - <br /> отличное место для активного зимнего отдыха!</motion.h2>
                <motion.div  className="inform__count">
                    <div className='block'>
                        <img className='block_imag_one' src={blockImageOne} alt="" />
                        <p 
                       
                        >Мы рады видеть вас в новом горнолыжном сезоне! В сезоне 2023-2024 г.г. будет функционировать пять современных кресельных подъемников: двухместный, трехместный и три четырехместных, общей длиной более 4,5 километров. Максимальная протяженность трасс более 10 километров, перепад высот около 370 метров. Для удобства отдыхающих, все подъемники имеют свое название, и различаются по цветам.</p>
                    </div>
                </motion.div>
            </div>

            <div className="parallax_two">
                
            </div>


            <div className="container">
                    <div className='block'>
                        <motion.img custom={2} variants={textAnimarion} src={blockImageTwo} alt="" />
                        <p
                        
                        >На карте все подробного обозначено, длины подъемников и перепады высот. 
                        Основными преимуществами горнолыжного комплекса Чункурчак являются: 
                        - пять кресельных подъемников;
                        - «комфортные» трассы для начинающих;
                        - высококвалифицированные инструкторы по горным лыжам и сноуборду
                        - высокое качество обслуживания;
                        - близость к городу - всего 30 км. 
                        </p>
                    </div>
            </div>

            <div className="parallax_three">
                
            </div>

            <div className="container">
                    <div className='block'>
                        <motion.img src={blockImageThree} alt="" />
                        <p>К услугам посетителей - пункт проката спортивного инвентаря, медпункт, парковка, кафе-фастфуд, детский уголок, теплые санузлы. Погоду в горах вы можете смотреть в веб-камеру на нашем сайте
                            Горнолыжный комплекс Чункурчак – это отличное место для индивидуального, семейного и корпоративного отдыха, а также организации и проведения спортивных и развлекательных мероприятий различного уровня.
                            Мы делаем акцент на семейный отдых с детьми. Что бы было максимально комфортно и безопасно родителям с детьми, что бы и те и другие могли вместе кататься на лыжах и интересно проводить свой досуг!
                            Чистый воздух и здоровье всей семьи – это главные моменты отдыха.
                        </p>
                    </div>
            </div>
            
        </div>
    )
}

export default About_inform;