import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        // Make the logout API request
        const logoutCaptain = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    localStorage.removeItem('token'); // Remove token
                    navigate('/captain-login'); // Redirect to login page
                }
            } catch (error) {
                console.error('Error during logout:', error.response ? error.response.data : error.message);
                // Handle error or redirect user to login anyway
                navigate('/captain-login');
            }
        };

        logoutCaptain();
    }, [navigate]);

    return <div>Logging out...</div>;
};

export default CaptainLogout;
