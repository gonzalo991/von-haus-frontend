import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Router from './Router';
import { LoginProvider } from './components/contexts/LoginContext';
import './App.scss';

/**
 * Componente principal de la aplicación.
 * 
 * Configura la estructura general de la interfaz de usuario,
 * utiliza otros componentes para organizar y presentar el contenido.
 * 
 * @component
 * @example
 * // Uso en otro componente
 * import App from './App';
 * // ...
 * <App />
 * 
 * @returns {JSX.Element} El componente principal de la aplicación.
 */

const App: React.FC = () => {

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
