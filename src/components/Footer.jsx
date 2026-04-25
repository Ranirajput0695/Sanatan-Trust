import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'info.main', color: 'white', pt: 12, pb: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ mb: 10 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box 
                sx={{ 
                  width: 36, 
                  height: 36, 
                  bgcolor: 'secondary.main', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  mr: 1.5 
                }}
              >
                <Typography sx={{ fontWeight: 'bold', color: 'white' }}>ॐ</Typography>
              </Box>
              <Typography variant="h5" sx={{ fontFamily: 'Cinzel', fontWeight: 'bold' }}>Sanatan Trust</Typography>
            </Box>
            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
              Preserving and promoting the eternal wisdom of Sanatana Dharma for a balanced and purposeful life.
            </Typography>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold' }}>Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['About Us', 'Our Programs', 'Donation', 'Events'].map(link => (
                <Link 
                  key={link} 
                  href="#" 
                  color="inherit" 
                  underline="none" 
                  sx={{ opacity: 0.7, '&:hover': { opacity: 1, color: 'primary.main' } }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold' }}>Programs</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['Vedic Studies', 'Sanskrit Language', 'Meditation', 'Philosophy'].map(link => (
                <Link 
                  key={link} 
                  href="#" 
                  color="inherit" 
                  underline="none" 
                  sx={{ opacity: 0.7, '&:hover': { opacity: 1, color: 'primary.main' } }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold' }}>Contact</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, opacity: 0.7 }}>
              <Typography>📍 Kashi, Uttar Pradesh, India</Typography>
              <Typography>📧 info@sanatantrust.edu</Typography>
              <Typography>📞 +91 98765 43210</Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', opacity: 0.5 }}>
          <Typography variant="body2">© 2026 Sanatana Dharma Educational Trust. All rights reserved.</Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link href="#" color="inherit" underline="none">Privacy Policy</Link>
            <Link href="#" color="inherit" underline="none">Terms of Service</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
