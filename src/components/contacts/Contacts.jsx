import React from 'react'
import './Contacts.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Contacts = () => {
  const {t} = useTranslation()

  return (
    <div className='contactsPage'>
      <div className="img"></div>
      <div className="contactUs">
        <h1>{t('Contact us')}</h1>
        <p>{t('Uzbekistan, Tashkent, Yunusabad district, Shivli street, 6-8, 100084')}</p>
        <p>Tel.: <span>(+998) 78 150 10 90</span></p>
        <span>info@navruzhotel.uz</span>
        <div className="ift">
          <a href="https://www.instagram.com/navruzhotel/"><FaInstagram /></a>
          <a href="https://www.facebook.com/hotelnavruz/"><FaFacebookF /></a>
          <a href="https://t.me/navruzhotel"><PiTelegramLogo /></a>
        </div>
        <button>{t('Contact us')}</button>
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

export default Contacts