import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div class="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
