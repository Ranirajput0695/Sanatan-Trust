import React from 'react';
import { Card as MuiCard, CardContent, Typography, Box, Link, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = ({ title, description, icon, color = "primary" }) => {
  return (
    <MuiCard 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'visible',
        bgcolor: 'white',
        '&:hover': {
          transform: 'translateY(-16px)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
          '& .icon-box': {
            transform: 'scale(1.1) rotate(5deg)',
            boxShadow: '0 15px 30px rgba(230, 81, 0, 0.2)'
          },
          '& .arrow-icon': {
            transform: 'translateX(8px)'
          }
        },
        p: 1,
        borderRadius: 8,
        border: '1px solid rgba(0,0,0,0.03)'
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 4 }}>
        <Box 
          className="icon-box"
          sx={{ 
            width: 80, 
            height: 80, 
            bgcolor: `${color}.main`, 
            borderRadius: 5, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 4,
            fontSize: '2.5rem',
            color: 'white',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            transition: 'all 0.4s ease'
          }}
        >
          {icon}
        </Box>
        
        <Stack spacing={2}>
          <Typography variant="h4" component="h3" sx={{ fontWeight: 800, fontFamily: 'Cinzel', fontSize: '1.75rem' }}>
            {title}
          </Typography>
          
          <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1rem' }}>
            {description}
          </Typography>
          
          <Link 
            href="#" 
            underline="none" 
            sx={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              fontWeight: 800, 
              color: `${color}.main`,
              letterSpacing: 1,
              textTransform: 'uppercase',
              fontSize: '0.85rem'
            }}
          >
            Explore Course 
            <ArrowForwardIcon className="arrow-icon" sx={{ ml: 1.5, fontSize: 18, transition: 'transform 0.3s' }} />
          </Link>
        </Stack>
      </CardContent>
      
      {/* Decorative background element */}
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: -10, 
          right: -10, 
          width: 100, 
          height: 100, 
          bgcolor: `${color}.light`, 
          opacity: 0.05, 
          borderRadius: '50%', 
          zIndex: -1 
        }} 
      />
    </MuiCard>
  );
};

export default Card;
