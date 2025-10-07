import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProfilePage from '@/routes/ProfilePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/u/kaio" replace />} />
      <Route path="/u/:handle" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
