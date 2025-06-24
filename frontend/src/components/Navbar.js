import { Link, useNavigate } from 'react-router-dom'
import { getToken, removeToken } from '../auth/authService'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
} from '@mui/material'

const Navbar = () => {
    const navigate = useNavigate()
    const token = getToken()

    const handleLogout = () => {
        removeToken()
        navigate('/login')
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    CRUD App
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {token ? (
                        <>
                            <Button color="inherit" component={Link} to="/products">
                                Products
                            </Button>
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" component={Link} to="/login">
                                Login
                            </Button>
                            <Button color="inherit" component={Link} to="/register">
                                Register
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar
