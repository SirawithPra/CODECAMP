import React, { useContext, useEffect, useCallback } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams] = useSearchParams(); // Remove unused setSearchParams
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  // Function to verify payment
  const verifyPayment = useCallback(async () => {
    // Validate query parameters
    if (!success || !orderId) {
      alert('Invalid payment verification data');
      navigate('/');
      return;
    }

    try {
      const response = await axios.post(`${url}/api/order/verify`, {
        success,
        orderId,
      });

      if (response.data.success) {
        alert('Payment Successful');
        navigate('/myorders');
      } else {
        alert('Payment Failed');
        navigate('/');
      }
    } catch (err) {
      console.error('Error during payment verification:', err);
      alert('Server Error. Please try again later.');
      navigate('/');
    }
  }, [url, success, orderId, navigate]);

  // Trigger payment verification on mount
  useEffect(() => {
    verifyPayment();
  }, [verifyPayment]);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
