import { useEffect, useState } from "react"
import api from "../api/axios"
import {
    Container,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Box,
} from "@mui/material"
import { Link } from "react-router-dom"
import {showToast} from "../components/Toast";

const ProductList = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const res = await api.get("/products")
            setProducts(res.data)
        } catch (err) {
            console.error("Error fetching products", err)
        }
    }

    const handleDelete = async (id) => {
        try {
            await api.delete(`/products/${id}`);
            setProducts(products.filter((p) => p.id !== id))
            showToast('Product deleted successfully', 'success');
        } catch (err) {
            console.error("Error deleting product", err)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <Container sx={{ mt: 4 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h4">Product List</Typography>
                <Button
                    component={Link}
                    to="/products/new"
                    variant="contained"
                    color="primary">
                    Add Product
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>ID</strong></TableCell>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Description</strong></TableCell>
                            <TableCell><strong>Price</strong></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((prod) => (
                            <TableRow key={prod.id}>
                                <TableCell>{prod.id}</TableCell>
                                <TableCell>{prod.name}</TableCell>
                                <TableCell>{prod.description}</TableCell>
                                <TableCell>{prod.price}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="small"
                                        component={Link}
                                        to={`/products/edit/${prod.id}`}
                                        sx={{ mr: 1 }}>
                                        Edit
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        size="small"
                                        onClick={() => handleDelete(prod.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {products.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    No products found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ProductList
