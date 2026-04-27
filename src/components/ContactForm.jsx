import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Snackbar, Alert } from '@mui/material';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add a new document with a generated id.
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp()
      });

      setStatus({
        open: true,
        message: 'Message sent successfully! We will get back to you soon.',
        severity: 'success'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus({
        open: true,
        message: 'Failed to send message. Please check your Firebase configuration.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setStatus(prev => ({ ...prev, open: false }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <TextField
        fullWidth
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        variant="outlined"
        sx={{ 
          '& .MuiOutlinedInput-root': { borderRadius: 3 }
        }}
      />
      
      <TextField
        fullWidth
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        variant="outlined"
        sx={{ 
          '& .MuiOutlinedInput-root': { borderRadius: 3 }
        }}
      />
      
      <TextField
        fullWidth
        label="Your Message"
        name="message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
        variant="outlined"
        sx={{ 
          '& .MuiOutlinedInput-root': { borderRadius: 3 }
        }}
      />
      
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        disabled={loading}
        endIcon={<SendIcon />}
        sx={{ 
          py: 2, 
          fontSize: '1rem', 
          fontWeight: 800,
          borderRadius: 3,
          boxShadow: '0 10px 20px rgba(230, 81, 0, 0.2)',
          '&:hover': { boxShadow: '0 15px 30px rgba(230, 81, 0, 0.3)' }
        }}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>

      <Snackbar 
        open={status.open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={status.severity} sx={{ width: '100%', borderRadius: 4 }}>
          {status.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
