import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import React Router components
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProtectedRoute from './component/ProtectRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={!localStorage.getItem("token") ? <Login /> : <Navigate to="/home" />} /> 
        <Route path="/home" element={
           <ProtectedRoute>
              <Home />
            </ProtectedRoute>
        } />   
      </Routes>
    </Router>
  );
}

export default App;
