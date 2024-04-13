import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Booking from './components/booking/Booking'
import Contacts from './components/contacts/Contacts'
import Facilities from './components/facilities/Facilities'
import Menu from './components/menu/Menu'
import Rooms from './components/rooms/Rooms'
import Home from './components/home/Home';
import './i18next'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/facilities' element={<Facilities/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

