import React from 'react';
import './App.css';
import HeaderNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <HeaderNavbar />
      </header>
      <ItemListContainer title="Lista de productos" />
    </div>
  );
}

export default App;
