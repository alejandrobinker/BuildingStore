import React from 'react';
import './App.css';
import HeaderNavbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ProductListContainer from './components/ProductListContainer';

function App() {
    return (
        <div className="App">
            <header>
                <HeaderNavbar />
            </header>
            <Routes>
                <Route path="/" element={<ProductListContainer />} />
                <Route path="/category/:categoryName" element={<ProductListContainer />} />
                <Route path="/producto/:productId" element={<ItemDetailContainer />} />
            </Routes>
        </div >
    );
}

export default App;
