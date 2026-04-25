import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
        background: '#FDFBF7'
      }}
    >
      {/* Decorative blobs */}
      <Box sx={{ 
        position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', 
        background: 'rgba(255, 153, 51, 0.08)', borderRadius: '50%', filter: 'blur(100px)' 
      }} />
      <Box sx={{ 
        position: 'absolute', bottom: '-10%', left: '-10%', width: '50%', height: '50%', 
        background: 'rgba(19, 136, 8, 0.08)', borderRadius: '50%', filter: 'blur(100px)' 
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography 
          variant="overline" 
          sx={{ 
            color: 'primary.main', 
            fontWeight: 'bold', 
            letterSpacing: 4,
            display: 'block',
            mb: 2
          }}
        >
          Sacred Wisdom for Modern Life
        </Typography>
        
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '3.5rem', md: '6rem', lg: '7rem' },
            color: 'primary.main',
            mb: 4,
            lineHeight: 1.1,
            fontFamily: 'Cinzel',
            textShadow: '0 4px 10px rgba(0,0,0,0.05)'
          }}
        >
          असतो मा सद्गमय
        </Typography>

        <Typography 
          variant="h5" 
          sx={{ 
            maxWidth: 800, 
            mx: 'auto', 
            mb: 8, 
            color: 'text.secondary',
            fontWeight: 300,
            lineHeight: 1.6
          }}
        >
          Lead me from the unreal to the real, from darkness to light, from death to immortality.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ px: 6, py: 2, fontSize: '1.1rem', boxShadow: 10, borderRadius: 100 }}
          >
            Explore Programs
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            size="large"
            sx={{ px: 6, py: 2, fontSize: '1.1rem', borderWidth: 2, borderRadius: 100, borderColor: 'secondary.main' }}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
