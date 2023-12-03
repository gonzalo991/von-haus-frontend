import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Router from './Router';
import { LoginProvider } from './components/contexts/LoginContext';
import './App.scss';


function App() {

  return (
    <>
      <HashRouter>
        <LoginProvider>
          <Header />
          <main>
            <Router />
          </main>
          <Footer />
        </LoginProvider>
      </HashRouter>
    </>
  )
}

export default App;
