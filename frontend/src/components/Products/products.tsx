import './product.css'
import { Navbar } from '../index'
import ProductList from './productList';
import { logPageView } from '../../analytics';
import useDocumentTitle from '../../useDocumentTitle';
import { useFetchProductsQuery } from '../../features/products/product-api-slice';

import { useEffect } from 'react';

const Products = () => {
    const { data: products = [], isLoading, error } = useFetchProductsQuery();
    useDocumentTitle('Products Page - Stock + Spark');

    useEffect(() => {
        logPageView(location.pathname, document.title);
    }, [location]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        let errorMessage = 'An error occurred.';
        if ('status' in error) {
            // You can access the error status and data if needed
            const errorStatus = error.status;
            const errorData = error.data;
            errorMessage = `Error ${errorStatus}: ${JSON.stringify(errorData)}`;
        } else if ('message' in error) {
            errorMessage = error.message as string;
        }
        return <div>Error: {errorMessage}</div>;
    }



    return (
        <div className='ProductsPage'>
            <div className='wrapper'>
                <Navbar />
                <ProductList products={products} />
            </div>
        </div>
    );
};

export default Products;
