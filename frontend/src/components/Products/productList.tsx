import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

import './product.css'
import { Products, useUpdateProductQuantityMutation } from '../../features/products/product-api-slice';

const ProductList = ({ products = [] }: { products: Products[] }) => {

    const [ updateProductQuantity ] = useUpdateProductQuantityMutation();

    const handleQuantityChange = async (productId: string, change: number) => {
        const product = products.find((p) => p._id === productId);
        if (product) {
            const newQuantity = product.quantity + change;
            try {
                await updateProductQuantity({ id: productId, quantity: newQuantity }).unwrap();
                // Update successful, perform any necessary actions
            } catch (error) {
                // Handle error
            }
        }
    };

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
                                        <Button size='small' onClick={() =>  handleQuantityChange(product._id, 1) }>+</Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button size='small' onClick={() =>  handleQuantityChange(product._id, -1) }>-</Button>
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
