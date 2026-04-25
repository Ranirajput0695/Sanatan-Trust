import React from 'react';
import { Card as MuiCard, CardContent, Typography, Box, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = ({ title, description, icon, color = "primary" }) => {
  return (
    <MuiCard 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-12px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        },
        p: 2,
        borderRadius: 6
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box 
          sx={{ 
            width: 64, 
            height: 64, 
            bgcolor: `${color}.main`, 
            borderRadius: 4, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 4,
            fontSize: '2rem',
            color: 'white',
            boxShadow: 4
          }}
        >
          {icon}
        </Box>
        <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold', fontFamily: 'Cinzel' }}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
          {description}
        </Typography>
        <Link 
          href="#" 
          underline="none" 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontWeight: 'bold', 
            color: `${color}.main`,
            '&:hover': {
              '& svg': { transform: 'translateX(8px)' }
            }
          }}
        >
          Read More 
          <ArrowForwardIcon sx={{ ml: 1, fontSize: 20, transition: 'transform 0.2s' }} />
        </Link>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
