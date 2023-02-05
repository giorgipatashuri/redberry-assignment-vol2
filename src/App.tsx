import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
