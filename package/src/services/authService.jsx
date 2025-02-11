import axios from 'axios';

// Define the API URL for your backend
const API_URL = 'https://broker-jet.vercel.app/api/auth';  

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;  // Return the response data from the backend (e.g., success message)
  } catch (error) {
    // Handle registration errors (e.g., user already exists, invalid data)
    if (error.response) {
      // Request made and server responded with a status other than 2xx
      throw new Error(error.response.data.message || 'Registration failed');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from server. Please try again.');
    } else {
      // Something else happened
      throw new Error('Something went wrong during registration');
    }
  }
};

// Login user
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    
    if (response.data.token) {
      // Store token and role in localStorage/sessionStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);  // Store role for routing
    }
    
    return response.data;  // Return the response data (e.g., token, user role)
  } catch (error) {
    // Handle login errors (e.g., invalid credentials, server issues)
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else if (error.request) {
      throw new Error('No response from server. Please try again.');
    } else {
      throw new Error('Something went wrong during login');
    }
  }
};

// Get currently logged-in user (optional)
export const getMe = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },  // Pass token in the Authorization header
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to get user data');
    } else if (error.request) {
      throw new Error('No response from server. Please try again.');
    } else {
      throw new Error('Something went wrong while fetching user data');
    }
  }
};
