import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';


const Home = () => {
  const {t} = useTranslation()
  
  return (
    <div className='home'>
        <div className="title">
          <div className="text">
            <p>{t('Cozy hotel for business and leisure in the business center of Tashkent')}</p>
            <Link to='/booking'><button>{t('Book')}</button></Link>
          </div>
          <div className="bookOnline">
            <h3>{t('Book online')}</h3>
            <p>{t('Get your guaranteed accommodation')} <span>{t('RIGHT NOW!')}</span></p>
            <div className="check_in">

            </div>
            <div className="check_out">

            </div>
            <div className="guests">
              
            </div>
            <Link to='/booking'><button>{t('FIND ROOM')}</button></Link>
          </div>
        </div>

        <div className="about_us">
          <h1>{t('about')}</h1>
          <div className="text">
            <div className="txt">
              <h1>{t('Navruz Hotel Tashkent')}</h1>
              <p>{t('Navruz Hotel Tashkent is a cozy, comfortable hotel with high-class service 24/7 and an excellent location in the business center of the city with developed infrastructure.')}</p>
              <p>{t('The hotel offers 128 comfortable and well-equipped rooms of various categories. All hotel rooms are equipped with air conditioning, refrigerator, safety box, smart TV with satellite channels, Wi-Fi and toiletries.')}</p>
              <p>{t('Hotel guests have access to spacious conference rooms, a restaurant, a bar, a gym, billiards, a sauna, an outdoor swimming pool, a cozy courtyard with gazebos and free bicycle rental. Airport transfers and room service are available.')}</p>
              <p>{t('The reception is open 24 hours a day.')}</p>
              <Link to='/about' className='link'><span>{t('Learn more')} <FaArrowRight /></span></Link>
            </div>
            <img src="https://navruzhotel.uz/_nuxt/img/about-bg.57c329c.png" alt="bolakay" />
          </div>
          <div className="card_panel">
            <div className="cards">
              <img src="	https://navruzhotel.uz/_nuxt/img/medal.bde7ded.svg" alt="$" />
              <span>{t('Affordable room price')}</span>
            </div>
            <div className="cards">
              <img src="https://navruzhotel.uz/_nuxt/img/snow.7c72b49.svg" alt="barg" />
              <span>{t('Green area to relax')}</span>
            </div>
            <div className="cards">
              <img src="	https://navruzhotel.uz/_nuxt/img/wifi.cbdbbea.svg" alt="wi-fi" />
              <span>{t('Free Wi-Fi')}</span>
            </div>
            <div className="cards">
              <img src="https://navruzhotel.uz/_nuxt/img/bonfire.5cef29a.svg" alt="person" />
              <span>{t('Competent staff 24/7')}</span>
            </div>
          </div>
        </div>

        <div className="rooms">
          <h1>{t('rooms')}</h1>
          <div className="cards_container">
            <Link to='/rooms' className='link'>
              <div className="card">
                <img src="	https://navruzhotel.uz/_nuxt/img/twin-room.e166ff0.png" alt="" />
                <p>{t('Standart Twin')}</p>
              </div>
            </Link>
            <Link to='/rooms' className='link'>
              <div className="card">
                <img src="	https://navruzhotel.uz/_nuxt/img/king-room.b252916.png" alt="" />
                <p>{t('Standart King')}</p>
              </div>
            </Link>
            <Link to='/rooms' className='link'>
              <div className="card">
                <img src="	https://navruzhotel.uz/_nuxt/img/suite-room.01e2e1a.png" alt="" />
                <p>{t('Suite')}</p>
              </div>
            </Link>
            <Link to='/rooms' className='link'>
              <div className="card">
                <img src="		https://navruzhotel.uz/_nuxt/img/econom-room.4a937ff.png" alt="" />
                <p>{t('Econonm Standart')}</p>
              </div>
            </Link>
            <Link to='/rooms' className='link'>
              <div className="card">
                <img src="	https://navruzhotel.uz/_nuxt/img/superior-room.ed75c91.png" alt="" />
                <p>{t('Superior King')}</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="facilities">
          <h1>{t('facilities')}</h1>
          <div className="cards_container">
            <div className="card">
              <div className="blur">
                <p>{t('Restaurant')}</p>
              </div>
            </div>
            <div className="card">
              <div className="blur">
                <p>Bar</p>
              </div>
            </div>
            <div className="card">
              <div className="blur">
                <p>{t('Conference rooms')}</p>
              </div>
            </div>
            <div className="card">
              <div className="blur">
                <p>{t('Swimming pool')}</p>
              </div>
            </div>
            <div className="card">
              <div className="blur">
                <p>{t('Gym')}</p>
              </div>
            </div>
            <div className="card">
              <div className="blur">
                <p>{t('Billiard room')}</p>
              </div>
            </div>
          </div>
          <Link to='facilities' className='link'><button>{t('More')}</button></Link>
        </div>

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5991.59909708732!2d69.285998!3d41.334972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf49b954dd3%3A0x8b6b32b227cbe29e!2sNavruz%20Hotel%20Tashkent!5e0!3m2!1sen!2spl!4v1712789310338!5m2!1sen!2spl"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="developer">
          <p>© 2018—2024 Navruz hotel</p>
          <div className="developers_name">
            <p>Developed by <span>Islombek</span></p>
            <p>Designed by <span>Islombek</span></p>
          </div>
        </div>
      </div>
  )
}

export default Home