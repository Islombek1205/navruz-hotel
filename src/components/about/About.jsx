import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const About = () => {
  const {t} = useTranslation()

  return (
    <div className='about'>
      <div className="img"></div>
      <div className="about_us">
        <p>{t('about')}</p>
        <span><b>{t('Cozy and comfortable Navruz Hotel Tashkent')}</b> {t('is located in the city center and first opened its doors to hotel guests in 2018.')}</span>
        <span><b>{t('The hotel offers 128 rooms')}</b> {t('of various categories for a comfortable stay, equipped with modern technology. Each room has a smart TV, mini fridge, air conditioning, Wi-Fi and a secure safe.')}</span>
        <p>{t('Why we are?')}</p>
        <div className="ul">
          <ul>
            <li>{t('Affordable prices')}</li>
            <li>{t('Online booking management')}</li>
            <li>{t('Multilingual staff')}</li>
            <li>{t('Security')}</li>
            <li>{t('Non-smoking rooms')}</li>
          </ul>
          <ul>
            <li>{t('Free Wi-Fi')}</li>
            <li>{t('Airport shuttle')}</li>
            <li>{t('Family rooms')}</li>
            <li>{t('Free parking')}</li>
            <li>{t('24-hour front desk')}</li>
          </ul>
        </div>
        <div className="book_online">
          <p>{t('Book online')}</p>
          <Link to='/booking'><button>{t('FIND ROOM')}</button></Link>
        </div>
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

export default About