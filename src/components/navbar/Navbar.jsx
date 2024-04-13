import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Navbar = () => {
    const { t, i18n } = useTranslation()
    const [selectedlangeuage, setSelectedlangeuage] = useState(localStorage.getItem('selectedLanguage' || 'en'))

    const changeLenguage = lng => {
        i18n.changeLanguage(lng);
        setSelectedlangeuage(lng);
        console.log(lng);
        localStorage.setItem('selectedLanguage', lng)
      }

  return (
    <div className='navbar'>
        <div className="nav_top">
            <ul>
                <li><Link className='routes' to='/'>{t('home')}</Link></li>
                <li><Link className='routes' to='/booking'>{t('booking')}</Link></li>
                <li><Link className='routes' to='/about'>{t('about')}</Link></li>
                <li><Link className='routes' to='/rooms'>{t('rooms')}</Link></li>
                <li><Link className='routes' to='/facilities'>{t('facilities')}</Link></li>
                <li><Link className='routes' to='/blog'>{t('blog')}</Link></li>
                <li><Link className='routes' to='/contacts'>{t('contacts')}</Link></li>
                <li><Link className='routes' to='/menu'>{t('menu')}</Link></li>
                <li>
                    <select name="" id="" onChange={(e) => changeLenguage(e.target.value)} value={selectedlangeuage}>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        <option value="uz">UZ</option>
                    </select>
                </li>
            </ul>
        </div>
        <div className="nav_bottom">
            <img src="https://navruzhotel.uz/_nuxt/img/logo.4e3f64a.svg" alt="" />
            <p className='tel'>+998 78 150 10 90</p>
        </div>
    </div>
  )
}

export default Navbar