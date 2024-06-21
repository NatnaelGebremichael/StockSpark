import './product.css'
import { Navbar } from '../index'
import ProductList from './productList';
import { logPageView } from '../../analytics';
import useDocumentTitle from '../../useDocumentTitle';


import { useEffect } from 'react';

const Products = () => {

    useDocumentTitle('Products Page - Stock + Spark');
    useEffect(() => {
        logPageView(location.pathname, document.title);
    }, [location]);

    return (
        <div className='ProductsPage'>
            <div className='wrapper'>
                <Navbar />
                <ProductList />
            </div>
        </div>
    );
};

export default Products;
