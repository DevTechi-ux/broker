import React, { useState } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { TextField, Container, Typography, Button, Box, CircularProgress } from '@mui/material';
import { loginUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);  // Track loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  // Set loading to true when submitting the form
        setError(''); // Clear previous error

        try {
            const response = await loginUser(username, password);

            if (response?.data?.token && response?.data?.role) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('role', response.data.role); // Save role in localStorage

                // Redirect based on role
                if (response.data.role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/user');
                }
            } else {
                setError('Invalid credentials or unexpected response structure');
            }
        } catch (error) {
            console.error('Login error: ', error); // Log the error for debugging
            setError(error?.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);  // Reset loading state after the request is done
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
                            <Typography variant="h4" gutterBottom color="white">


                                Login
                            </Typography>
                            <form onSubmit={handleSubmit} >
                                <TextField 
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required

                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {error && (
                                    <Typography color="error" sx={{ marginTop: 2 }}>
                                        {error}
                                    </Typography>
                                )}
                                <Button 
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ marginTop: 2 }}
                                    disabled={loading}  // Disable button while loading
                                >
                                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                                </Button>
                            </form>
                            {/* Register button added here */}
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{ marginTop: 2 }}
                                onClick={() => navigate('/register')}
                            >
                                Register
                            </Button>
                        </Box>
                    </Container>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};


 export default LoginPage;
