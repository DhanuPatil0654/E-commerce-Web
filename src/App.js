import React, { lazy, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Footer from './Logo/Footer/Footer';
import Loadable from './Loadable';
import './App.css';
import { SnackbarProvider, useSnackbar } from 'notistack';

const Hightlight = Loadable(lazy(() => import('./Components/Hightlight/Hightlight')));
const Pants = Loadable(lazy(() => import('./search compo/Pants/Pants')));
const Shoes = Loadable(lazy(() => import('./search compo/Shoes/Shoes')));

function App() {
  

  return (
    <>
      <div className='starting'>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Hightlight />} />
              <Route path="/pants" element={<Pants/>} />
              <Route path="/shoes" element={<Shoes />} /> 
            </Routes>
            <Footer />
          </BrowserRouter>
      </div>
    </>
  );
}


export default App;
