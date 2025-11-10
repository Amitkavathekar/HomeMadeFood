import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import JoinUs from '../pages/JoinUs';
import WhyUs from '../pages/WhyUs';
import Blog from '../pages/Blog';
import Career from '../pages/Career';
import TiffinServiceInpune from '../pages/TiffinServiceInpune';
import TiffinServiceInBenglore from '../pages/TiffinServiceInBenglore';
import TiffinServiceInKota from '../pages/TiffinServiceInKota';
import ForCorporates from '../pages/ForCorporates';
import SignUp from './../pages/SignUp';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/whyus' element={<WhyUs />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/Career' element={<Career />} />
      <Route path='/tiffinserviceinpune' element={<TiffinServiceInpune />} />
      <Route
        path='/tiffinserviceinbenglore'
        element={<TiffinServiceInBenglore />}
      />
      <Route path='/tiffinserviceinkota' element={<TiffinServiceInKota />} />
      <Route path='/forcorporates' element={<ForCorporates />} />
      <Route path='/joinus' element={<JoinUs />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
