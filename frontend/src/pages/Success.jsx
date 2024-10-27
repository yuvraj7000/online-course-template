
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const Success = () => {
    const { clearCart } = useCart();
    const [email, setEmail] = useState('');
        const storedEmail = localStorage.getItem('email');
        if (!email && storedEmail) {
            setEmail(storedEmail);
        }
    useEffect(() => {
        if (email) {
            console.log('Sending email to:', email);
            axios
                .post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/email`, {
                    email: email,
                })
                .then((response) => {
                    console.log("Email sent successfully");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log("No email provided");
        }

        console.log('Payment was successful, clearing cart');
        clearCart();
        localStorage.removeItem('email');
    }, [email]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-100 text-base-content">
            <div className="text-center p-10 rounded-lg shadow-lg bg-base-200">
                <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
                <p className="text-lg">Your order has been placed successfully.</p>
                <p className="text-lg">check details on provided email {`${storedEmail}`}</p>
            </div>
        </div>
    );
};

export default Success;