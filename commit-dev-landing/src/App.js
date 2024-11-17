import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Catalog />
      <Contato />
      <Footer />

    </div>
  );
}

export default App;
