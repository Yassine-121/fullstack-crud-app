import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/axios"
import { saveToken } from "./authService"
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
} from "@mui/material"
import {showToast} from "../components/Toast";

const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await api.post("/auth/login", form)
            saveToken(res.data.token)
            navigate("/products")
            showToast("Welcome !!", 'success');
        } catch (err) {
            showToast(err.response.data, 'error');
        }
    }

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        name="username"
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={form.username}
                        onChange={handleChange}
                        required/>
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={form.password}
                        onChange={handleChange}
                        required/>
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                        Log in
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default Login
