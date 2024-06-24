import './product.css'
import { Navbar } from '../index'
import ProductList from './productList';
import useDocumentTitle from '../../useDocumentTitle';

const Products = () => {

    useDocumentTitle('Products Page - Stock + Spark');

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
