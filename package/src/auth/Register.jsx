import React, { useState } from 'react';
import { TextField, Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');  // Default role is user
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ username, email, password, role });
            navigate('/login');  // Redirect to login page after successful registration
        } catch (error) {
            setError(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <>
        <Header />
        <div className="page-content">
            <div className="main-bnr style-1">
                <div className="container">

                    <Container maxWidth="sm">
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5 }}>
                            <Typography variant="h4" gutterBottom>
                                Register
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <TextField
                                    label="Role"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    helperText="Role should be either 'user' or 'admin'"
                                />
                                {error && <Typography color="error">{error}</Typography>}
                                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                                    Register
                                </Button>
                            </form>
                        </Box>
                    </Container>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};




export default RegisterPage;
