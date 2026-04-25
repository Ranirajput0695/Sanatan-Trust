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
    <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, borderRadius: 8, bgcolor: '#fdfbf7', border: '1px solid rgba(0,0,0,0.05)' }}>
      <Typography variant="h4" sx={{ mb: 4, color: 'info.main', fontWeight: 'bold', fontFamily: 'Cinzel' }}>
        Send us a Message
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          variant="outlined"
          sx={{ bgcolor: 'white' }}
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
          sx={{ bgcolor: 'white' }}
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
          sx={{ bgcolor: 'white' }}
        />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={loading}
          endIcon={<SendIcon />}
          sx={{ 
            py: 1.5, 
            fontSize: '1.1rem', 
            boxShadow: 4,
            '&:hover': { boxShadow: 8, bgcolor: 'primary.dark' }
          }}
        >
          {loading ? 'Sending...' : 'Submit Message'}
        </Button>
      </Box>

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
    </Paper>
  );
};

export default ContactForm;
