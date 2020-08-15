import React from 'react';
import './App.scss';

import Header from './js/components/header/Header';
import Content from './js/components/content/Content';
import Footer from './js/components/footer/Footer';

import Nav from './js/components/nav/Nav';

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
