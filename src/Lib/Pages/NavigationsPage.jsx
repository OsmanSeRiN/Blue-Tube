import React from 'react';
import MainPage from './MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoAdd from './Video Add/VideoAdd';

const NavigationsPage = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/New Video' element={<VideoAdd/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default NavigationsPage