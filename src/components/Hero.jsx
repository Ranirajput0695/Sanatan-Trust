import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';

const Hero = () => {
  return (
    <Box 
      sx={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
        bgcolor: 'background.default',
        background: 'radial-gradient(circle at 10% 20%, rgba(230, 81, 0, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(46, 125, 50, 0.05) 0%, transparent 40%)'
      }}
    >
      {/* Abstract Background Elements */}
      <Box sx={{ 
        position: 'absolute', top: '10%', left: '5%', width: 300, height: 300, 
        border: '1px solid rgba(230, 81, 0, 0.1)', borderRadius: '50%', zIndex: 0 
      }} />
      <Box sx={{ 
        position: 'absolute', bottom: '15%', right: '10%', width: 500, height: 500, 
        border: '1px solid rgba(46, 125, 50, 0.1)', borderRadius: '50%', zIndex: 0 
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 800, 
              letterSpacing: 6,
              display: 'block',
              textTransform: 'uppercase',
              fontSize: '1rem'
            }}
          >
            The Journey of the Soul
          </Typography>
          
          <Box sx={{ position: 'relative' }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '3.5rem', md: '6.5rem', lg: '8rem' },
                color: 'primary.main',
                fontWeight: 900,
                lineHeight: 1,
                fontFamily: 'Cinzel',
                mb: 1
              }}
            >
              असतो मा सद्गमय
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                fontFamily: 'Cinzel', 
                color: 'secondary.main', 
                fontWeight: 400,
                opacity: 0.8,
                letterSpacing: 2
              }}
            >
              ASATO MA SADGAMAYA
            </Typography>
          </Box>

          <Typography 
            variant="h5" 
            sx={{ 
              maxWidth: 850, 
              color: 'text.secondary',
              fontWeight: 300,
              lineHeight: 1.8,
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              fontStyle: 'italic'
            }}
          >
            "Lead me from the unreal to the real, from darkness to light, from death to immortality."
          </Typography>


        </Stack>
      </Container>
      
    </Box>
  );
};

export default Hero;
