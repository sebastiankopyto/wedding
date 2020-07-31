import React from 'react';
import './App.scss';

import Header from './js/components/header/Header';
import Content from './js/components/content/Content';
import Footer from './js/components/footer/Footer';

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
