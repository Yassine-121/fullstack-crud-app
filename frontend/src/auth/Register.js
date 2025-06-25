import { useState } from "react"
import { useNavigate } from "react-router-dom"
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

const Register = () => {
    const [form, setForm] = useState({ username: "", password: "" })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await api.post("/auth/register", form)
            navigate("/login")
            showToast(res.data, 'success');
        } catch (err) {
            showToast(err.response.data, 'error');
        }
    }

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
                <Typography variant="h5" gutterBottom>
                    Register
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
                        Register
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default Register
