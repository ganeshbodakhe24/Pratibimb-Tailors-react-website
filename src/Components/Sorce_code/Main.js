import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Layout from './Layout';
import Header from './Header';
import Home from './Home';
import Gallery from './Gallery';
import Appointment from './Appointment';
import Blog from './Blog';
import About_us from './About_us';
import Contact from './Contact';
import Page_not_found from './Page_not_found';
function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='gallery' element={<Gallery />}></Route>
          <Route path='blogs' element={<Blog></Blog>}></Route>
          <Route path='aboutus' element={<About_us />}></Route>
          <Route path='contactus' element={<Contact></Contact>}></Route>
          <Route path='*' element={<Page_not_found></Page_not_found>}></Route>
        </Routes>
        <Layout>
         
        </Layout>
      </Router>
    
    </>
  )
}

export default Main;
