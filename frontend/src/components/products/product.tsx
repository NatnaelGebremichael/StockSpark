import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useFetchProductsQuery } from '../../features/products/product-api-slice';
const Product = () => {
    const { data: products = [], isLoading, error } = useFetchProductsQuery();

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
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow
                            key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {product.name}
                            </TableCell>
                            <TableCell align="right">{product.price}</TableCell>
                            <TableCell align="right">{product.quantity}</TableCell>
                            <TableCell align="right">{product.category}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Product;
