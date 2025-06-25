import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../api/axios"
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
} from "@mui/material"
import {showToast} from "../components/Toast";

const ProductForm = () => {
    const [form, setForm] = useState({ name: "", description: "", price: "" })
    const { id } = useParams()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const fetchProduct = async () => {
        try {
            const res = await api.get(`/products/${id}`)
            setForm(res.data)
        } catch (err) {
            console.error("Error fetching product:", err)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (id) {
                await api.put(`/products/${id}`, form)
                showToast('Product updated successfully', 'success');
            } else {
                await api.post("/products", form)
                showToast('Product created successfully', 'success');
            }
            navigate("/products")
        } catch (err) {
            console.error("Error saving product:", err)
        }
    };

    useEffect(() => {
        if (id) fetchProduct();
    }, [id]);

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 6 }}>
                <Typography variant="h5" gutterBottom>
                    {id ? "Edit Product" : "Add Product"}
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        fullWidth
                        margin="normal"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Description"
                        name="description"
                        fullWidth
                        margin="normal"
                        value={form.description}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Price"
                        name="price"
                        type="number"
                        fullWidth
                        margin="normal"
                        value={form.price}
                        onChange={handleChange}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        {id ? "Update" : "Create"}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default ProductForm
