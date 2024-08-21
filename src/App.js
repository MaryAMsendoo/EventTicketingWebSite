import React from 'react';
import './App.css';
import '../src/Assets/CSS/Style.css';
import HomePage from './Conponents/HomePageComponent';
import SearchEvent from './Conponents/SearchEvent';
import Shadules from './Conponents/Shadules';
import CreateEvent from './Conponents/CreateEvent';
import BrandsSection from './Conponents/BrandsSection';
import BlogSection from './Conponents/BlogSection';
import FooterSection from './Conponents/FooterSection';


function App() {
  return <div>
   <div id='HomePage'>
   <HomePage />
   </div>
   <div className='search-event'>
   <SearchEvent />
   </div>
   <div id='shadules'>
    <Shadules />
   </div>
   <div id='createEvent'>
    <CreateEvent />
   </div>
   <div id='brandsSection'>
    <BrandsSection />
   </div>
   <div id='blogSection'>
    <BlogSection />
   </div>
   <div id='footerSection'>
    <FooterSection />
   </div>
  </div>
}

export default App;
