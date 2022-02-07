import React from 'react';
import './App.css';
import HeaderNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
            <div className="App">
                <header>
                    <HeaderNavbar />
                </header>
                <Routes>
                    <Route path="/" element={<ItemListContainer title="Lista de productos" />} />
                    <Route path="/producto/:productId" element={<ItemDetailContainer />} />
                </Routes>
            </div >
    );
}

export default App;
