import './App.css';
import HeaderNavbar from './layout/Navbar';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemsDetail/ItemDetailContainer';
import ProductListContainer from './components/productList/ProductListContainer';
import Cart from './components/cart/Cart';
import ProductsLoad from './components/private/ProductsLoad';
import NotFound from './layout/NotFound';

function App() {

    return (
        <div className="App">
            <header>
                <HeaderNavbar />
            </header>
            <Routes>
                <Route path="/" element={<ProductListContainer />} />
                <Route path="/cart" element={< Cart />} />
                <Route path="/category/:categoryName" element={<ProductListContainer />} />
                <Route path="/producto/:productId" element={<ItemDetailContainer />} />
                <Route path="/productsLoad" element={<ProductsLoad />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div >
    );
}

export default App;
