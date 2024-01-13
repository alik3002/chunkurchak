import './header.css';
import logo from './../../img/logo-chunkurchak2.png';



function Header () {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="Logo" />
                        <span></span>
                    </div>
                    <div className="header__nav">
                        <li className="header__list"><a href="#about">O НАС</a></li>
                        <li className="header__list"><a href="#map">КАРТА И ПОДЪЕМНИКИ</a></li>
                        <li className="header__list"><a href="#cost">УСЛУГИ И ЦЕНЫ</a></li>
                        <li className="header__list"><a href="">АЛЬБОМЫ</a></li>
                        <li className="header__list"><a href="">ВИДЕО</a></li>
                        <li className="header__list"><a href="">ПРАИВЛА</a></li>
                        <li className="header__list"><a href="">КОНТАКТЫ</a></li>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;