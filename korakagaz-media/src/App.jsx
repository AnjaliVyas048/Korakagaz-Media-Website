import React from 'react';
import {  Routes, Route, useLocation } from 'react-router-dom';


// Import all your pages
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/HomePage/HomePage';
import BlogsPage from './Pages/BlogPage/BlogPage';
import AlbumDetails from './Pages/BlogPage/AlbumDetails';
import FilmsPage from './Pages/FilmsPage/Films';
import Testimonials from './Pages/Testimonials/Testimonials';
import ContactUs from './Pages/ContactUs/ContactUs';
import Header from './Components/Header/Header';

const  App= () =>  {
  const location = useLocation();

  const showHeader = location.pathname !== '/';

  return (
    <>
    {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<AlbumDetails />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </>
  );
}

export default App;


