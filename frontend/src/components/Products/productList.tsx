import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

import './product.css'
import { useFetchProductsQuery, useUpdateProductQuantityMutation, } from '../../features/products/product-api-slice';

const ProductList = () => {

    const { data: products = [], isLoading, error, refetch } = useFetchProductsQuery();
    const [updateProductQuantity, { isLoading: isUpdating }] = useUpdateProductQuantityMutation();

    const handleQuantityChange = async (productId: string, change: number) => {
        const product = products.find((p) => p._id === productId);
        if (product) {
            const newQuantity = product.quantity + change;
            try {
                const updatedProduct = await updateProductQuantity({ id: productId, quantity: newQuantity }).unwrap();
                // Update successful, perform any necessary actions
                // setUpdatedProductId(id);
                refetch();
                console.log('Product updated:', updatedProduct);
            } catch (err) {
                // Handle error
                console.error('Failed to update product:', err);
            }
        }
    };


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
        <div className='wrapper'>
            <div className='ProductsTable'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow
                                    key={product._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {product.name}
                                    </TableCell>
                                    <TableCell align="right">{product.price}</TableCell>
                                    <TableCell align="right">{product.quantity}</TableCell>
                                    <TableCell align="right">{product._id}</TableCell>
                                    <TableCell align="right">{product.category}</TableCell>
                                    <TableCell align="right">
                                        <Button disabled={isUpdating} size='small' onClick={() => handleQuantityChange(product._id, 1)}>+</Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button disabled={isUpdating} size='small' onClick={() => handleQuantityChange(product._id, -1)}>-</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='sales'>
                </div>
            </div>
        </div>
    )
}

export default ProductList
