import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InsIcon from './UI/Icon/Icon';
import Footer from './UI/Footer/Footer';

import LoginPage from './Components/LoginPage/LoginPage';

import RestorePassword from './Components/RestorePassword/RestorePassword';
import SetNewPassword from './Components/SetNewPassword/SetNewPassword';

import RegisterNameData from './Components/RegisterPages/reg1/RegisterNameData';
import RegisterPasswordData from './Components/RegisterPages/reg2/RegisterPasswordData';
import RegisterAdditionalData from './Components/RegisterPages/reg3/RegisterAdditionalData';

import RegisterMailVerificatoin from './Components/RegisterPages/reg4/MailVerification';
import ProfilePage from './Components/ProfilePage/ProfilePage';

import Admin from './Components/Admin/Admin';

function App() {
  return (
    <>
      <BrowserRouter>
        <InsIcon />

        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/restorePass" exact element={<RestorePassword />} />
          <Route path="/setNewPassword" exact element={<SetNewPassword />} />

          <Route path="/regName" element={<RegisterNameData />} />
          <Route path="/regPassword" element={<RegisterPasswordData />} />
          <Route path="/regAdditional" element={<RegisterAdditionalData />} />
          <Route path="/regMailVerify" element={<RegisterMailVerificatoin />} />
          
          <Route path="/profile/*" element={<ProfilePage />} />

          <Route path="/admin/*" element={<Admin />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
