import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Router from './Router';
import './App.scss';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Router />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
