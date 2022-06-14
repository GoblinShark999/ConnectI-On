import React from 'react';
import {Link, Navigate } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Navigate to="/login" />
    </div>
  );
}

export default HomePage;
