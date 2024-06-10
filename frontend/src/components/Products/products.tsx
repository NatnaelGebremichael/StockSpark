// import { useFetchProductsQuery } from '../../features/products/product-api-slice';
// import ProductList from './productList';

const Products = () => {
    const STOCK_BASE_URL = import.meta.env.VITE_STOCK_BASE_URL;
    // const { data: products = [], isLoading, error } = useFetchProductsQuery();

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     let errorMessage = 'An error occurred.';
    //     if ('status' in error) {
    //         // You can access the error status and data if needed
    //         const errorStatus = error.status;
    //         const errorData = error.data;
    //         errorMessage = `Error ${errorStatus}: ${JSON.stringify(errorData)}`;
    //     } else if ('message' in error) {
    //         errorMessage = error.message as string;
    //     }
    //     return <div>Error: {errorMessage}</div>;
    // }


    return (
        <div>
            <p>Hi Products Page,{STOCK_BASE_URL} </p>
            {/* <ProductList products={products} /> */}
        </div>
    );
};

export default Products;
