import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeTemplate from '../Component/Home/template/HomeTemplate';
import WriteTemplate from '../Component/Write/Template/WriteTemplate';

const AppRouter: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate/>}></Route>
        <Route path="write" element={<WriteTemplate />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;