import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Details from './Details';



const Main = () => {
  return <main className="main">
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/pokemon/:id' element={<Details />} />
    {/* <Route path='/new' element={<Formulario />} /> */}
    <Route path='/*' element={<Navigate to={"/"} />} />
  </Routes>
</main>;
};

export default Main;
