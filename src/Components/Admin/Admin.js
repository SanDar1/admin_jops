import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Login/Login';
import Requests from './Requests/Requests';
import AdminContracts from './AdminContracts/AdminContracts';
import Certificates from './Сertificates/Сertificates';

import ProfileIcon from '../../UI/ProfileIcon/ProfileIcon';

function ProfilePage() {
  return (
    <div style={{ minHeight: '100vh', marginBottom: '50px'}}>
      <ProfileIcon name="Admin" />

      <Routes>
        <Route path="" element={<Login />} />
        <Route path="requests" element={<Requests />} />
        <Route path="contracts" element={<AdminContracts />} />
        <Route path="certificates" element={<Certificates />} />
      </Routes>
    </div>
  );
}

export default ProfilePage;