import React from 'react'
import './Booking.css'
import { useTranslation } from 'react-i18next';


const Booking = () => {
  const {t} = useTranslation()

  return (
    <div className='booking'>
      <div className="img"></div>
      <div className="content">
        <h1>{t('booking')}</h1>
        <div className="reservation">
          <div className="details">
            <p>{t('Details of your stay')}</p>
          </div>
        </div>

        <div className="rules">
          <p>{t('Check-in rules')}</p>
          <ul>
            <li>- {t('Check-in 14:00 Check-out 12:00')}</li>
            <li>- {t('Early check-in from 06:00 +50% of the room rate')}</li>
            <li>- {t('Check-in before 06:00 is charged 100% of the room rate')}</li>
            <li>- {t('Late check-out until 18:00 +50% of the room rate')}</li>
            <li>- {t('Check-out after 18:00 is charged 100% of the room rate')}</li>
          </ul>
        </div>

        <div className="payment">
          <p>{t('Payment')}</p>
          <span>{t('Uzbek sum')}</span>
        </div>

        <div className="cards">
          <p>{t('Cards accepted')}</p>
          <span>UzCard, Humo, MasterCard, Visa, China Union Pay, Maestro.</span>
          <span>{t('Payment in rubles via Paygine')}</span>
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

export default Booking