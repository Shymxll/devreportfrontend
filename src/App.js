import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage/LoginPage.js';
import DashboardPage from './components/pages/DashboardPage/DashboardPage';

import HomePage from './components/pages/HomePage/HomePage';

const App = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
