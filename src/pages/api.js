import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('jwtToken');

  return axios.create({
    baseURL: 'http://localhost:3000', // Your backend URL
    headers: {
      Authorization: `Bearer ${token}`, // Include the token in the 'Authorization' header
    },
  });
};

export const postData = async (endpoint, data) => {
  const axiosInstance = axiosWithAuth();

  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add other API functions for GET, PUT, DELETE, etc. as needed

export default axiosWithAuth; // Export axiosWithAuth if needed externally
