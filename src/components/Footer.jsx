import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider, Stack, IconButton, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1A1A1A', color: 'white', pt: 15, pb: 6, position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background element */}
      <Box sx={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, bgcolor: 'primary.main', opacity: 0.03, borderRadius: '50%', filter: 'blur(100px)' }} />
      
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ mb: 10 }}>
          {/* Column 1: Brand & Social */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box 
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    bgcolor: 'primary.main', 
                    borderRadius: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    mr: 2,
                    boxShadow: '0 5px 15px rgba(230, 81, 0, 0.4)'
                  }}
                >
                  <Typography sx={{ fontWeight: 900, color: 'white', fontSize: '1.2rem' }}>ॐ</Typography>
                </Box>
                <Typography variant="h5" sx={{ fontFamily: 'Cinzel', fontWeight: 900, letterSpacing: 1 }}>SANATAN TRUST</Typography>
              </Box>
              <Typography variant="body1" sx={{ opacity: 0.6, lineHeight: 1.8, mb: 4 }}>
                Dedicated to restoring the eternal wisdom of Sanatana Dharma through holistic education, character building, and community service.
              </Typography>
              
              <Stack direction="row" spacing={1.5}>
                {[<FacebookIcon />, <TwitterIcon />, <InstagramIcon />, <YouTubeIcon />].map((icon, index) => (
                  <IconButton 
                    key={index}
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.05)', 
                      color: 'white',
                      transition: 'all 0.3s',
                      '&:hover': { bgcolor: 'primary.main', transform: 'translateY(-5px)' }
                    }}
                  >
                    {icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>
          
          {/* Column 2: Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 900, fontFamily: 'Cinzel', color: 'primary.main' }}>Links</Typography>
            <Stack spacing={2}>
              {['About Us', 'Our Programs', 'News & Events', 'Volunteer'].map(link => (
                <Link 
                  key={link} 
                  href="#" 
                  color="inherit" 
                  underline="none" 
                  sx={{ opacity: 0.6, transition: '0.3s', '&:hover': { opacity: 1, color: 'primary.main', transform: 'translateX(5px)' } }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Programs */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 900, fontFamily: 'Cinzel', color: 'primary.main' }}>Courses</Typography>
            <Stack spacing={2}>
              {['Vedic Studies', 'Sanskrit Bhasha', 'Dhyana Yoga', 'Dharma Shastra', 'Vastu Vidya'].map(link => (
                <Link 
                  key={link} 
                  href="#" 
                  color="inherit" 
                  underline="none" 
                  sx={{ opacity: 0.6, transition: '0.3s', '&:hover': { opacity: 1, color: 'primary.main', transform: 'translateX(5px)' } }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 900, fontFamily: 'Cinzel', color: 'primary.main' }}>Newsletter</Typography>
            <Typography variant="body2" sx={{ opacity: 0.6, mb: 3 }}>
              Subscribe to receive weekly insights into Vedic wisdom and trust updates.
            </Typography>
            <Box sx={{ position: 'relative' }}>
              <TextField 
                fullWidth 
                placeholder="Your Email" 
                variant="outlined" 
                size="small"
                sx={{ 
                  '& .MuiOutlinedInput-root': { 
                    bgcolor: 'rgba(255,255,255,0.05)', 
                    color: 'white',
                    borderRadius: 2,
                    pr: 6,
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                    '&:hover fieldset': { borderColor: 'primary.main' }
                  }
                }}
              />
              <IconButton 
                sx={{ 
                  position: 'absolute', right: 4, top: 4, 
                  bgcolor: 'primary.main', color: 'white', borderRadius: 1.5,
                  '&:hover': { bgcolor: 'primary.dark' } 
                }}
              >
                <SendIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mb: 4 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
          <Typography variant="body2" sx={{ opacity: 0.4 }}>
            © 2026 Sanatana Dharma Educational Trust. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={4}>
            {['Privacy Policy', 'Terms of Use', 'Cookies'].map(item => (
              <Link key={item} href="#" color="inherit" underline="none" sx={{ opacity: 0.4, fontSize: '0.85rem', '&:hover': { opacity: 1 } }}>
                {item}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
