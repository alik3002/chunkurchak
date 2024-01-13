import './cost.css';
import { motion } from 'framer-motion';


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
const Cost =() => {
    return (
        <div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        className="cost">

            <div id='cost' className="parallax__six">
                <div className="cost__main">
                        <div className="container">
                            <div id='cost' className="headline">
                                <h1>ЦЕНЫ ЗА АРЕНДУ ↓</h1>
                        </div>
                </div>
                </div>
            </div>

            <div className="container">
                <h2 className="cost__headline">КАНАТНЫЕ ДОРОГИ в сезоне 2023/2024</h2>
               

                <table>
                    <thead>
                    <tr>
                        <th className='th-top'>Дни катания: понедельник, вторник, среда, четверг, пятница (только будние дни c 10:00 до 16:00)</th>
                        <th className='th-top-right'>Стоимость</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Ski-pass взрослый (полный день)</td>
                        <td>1 100 сом</td>
                        
                    </tr>
                    <tr>
                        <td>Ski-pass детский c 3 до 11 лет (полный день)</td>
                        <td>800 сом</td>
                    </tr>
                    <tr>
                        <td>Ski-pass на 1 час</td>
                        <td>400 сом</td>
                    </tr>
                    <tr>
                        <td>Ski-pass на 2 часа</td>
                        <td>800 сом</td>
                    </tr>
                    <tr>
                        <td> <strong>Электронная карта</strong> </td>
                        <td>300 сом</td>
                    </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>Дни катания:суббота, <span>воскресенье и праздничные дни (c 10:00 до 16:00)</span></th>
                            <th>Стоимость</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Ski-pass взрослый (полный день)</td>
                        <td>1 500 сом</td>
                    </tr>
                    <tr>
                        <td>Ski-pass детский c 3 до 11 лет (полный день)</td>
                        <td>1 100 сом</td>
                    </tr>
                    <tr>
                        <td>Ski-pass взрослый за половину дня c 1000ч. до 1300ч. или c 1300ч. до 1600ч.</td>
                        <td>1 200 сом</td>
                    </tr>
                    <tr>
                        <td>Ski-pass детский за половину дня c 1000ч. до 1300ч. или c 1300ч. до 1600ч.</td>
                        <td>800 сом</td>
                    </tr>
                    <tr>
                        <td>Ski-pass на 1 часа</td>
                        <td>400 сом</td>
                    </tr>
                    <tr>
                        <td>Ski-pass на 2 часа</td>
                        <td>800 сом</td>
                    </tr>
                    <tr>
                        <td> <strong>Электронная карта</strong> </td>
                        <td>300 сом</td>
                    </tr>
                    </tbody>
                </table>


                <h2 className="cost__headline">ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ (с 1000ч. до 1600ч.) <br />
                (только при наличии паспорта, на 1 паспорт выдается только 1 комплект) 
                </h2>


                <table className='table__two'>
                    
                        <thead>
                        <tr>
                            <th className='th-top'>Наименование услуги</th>
                            <th className='th-top-right'>Стоимость в день</th>
                        </tr>
                        </thead>
                        <tr>
                            <td>Прокат инвентаря (лыжи до 2012 года)</td>
                            <td>600 сом</td>
                            
                        </tr>
                        <tr>
                            <td>Прокат инвентаря (лыжи и сноуборды 2013-14 год)</td>
                            <td>1000 сом</td>
                        </tr>
                        <tr>
                            <td>Прокат инвентаря (лыжи и сноуборды 2015-2016 года)</td>
                            <td>1 200 сом</td>
                        </tr>
                  
                </table>

                <h3 className='bottom_h3'>Администрация горнолыжной базы «Чункурчак» оставляет за собой право изменения цен на предоставляемые услуги в течение сезона.</h3>
            </div>
        </div>
    )
}

export default Cost