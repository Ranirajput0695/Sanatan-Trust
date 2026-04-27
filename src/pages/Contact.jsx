import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, IconButton } from '@mui/material';
import ContactForm from '../components/ContactForm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () => {
  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: "Our Location",
      detail: "Kashi, Uttar Pradesh, India",
      color: "primary.main"
    },
    {
      icon: <EmailIcon />,
      title: "Email Address",
      detail: "info@sanatantrust.edu",
      color: "secondary.main"
    },
    {
      icon: <PhoneIcon />,
      title: "Phone Number",
      detail: "+91 98765 43210",
      color: "primary.main"
    }
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, color: '#1877F2' },
    { icon: <TwitterIcon />, color: '#1DA1F2' },
    { icon: <InstagramIcon />, color: '#E4405F' },
    { icon: <YouTubeIcon />, color: '#FF0000' }
  ];

  return (
    <Box sx={{ pt: { xs: 12, md: 15 }, pb: 10 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 4 }}>
            Get In Touch
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: 'Cinzel', fontWeight: 800, mb: 3 }}>
            Connect With Us
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: 'secondary.main', mx: 'auto', borderRadius: 2 }} />
        </Box>

        <Grid container spacing={8}>
          {/* Left Column: Info */}
          <Grid item xs={12} md={5}>
            <Stack spacing={4}>
              <Typography variant="h4" sx={{ fontWeight: 800, fontFamily: 'Cinzel' }}>
                How Can We Help?
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                Whether you're interested in our programs, want to volunteer, or have questions about our mission, our team is here to guide you.
              </Typography>

              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <Paper 
                    key={index}
                    elevation={0} 
                    sx={{ 
                      p: 3, 
                      borderRadius: 4, 
                      bgcolor: 'white', 
                      display: 'flex', 
                      gap: 3, 
                      alignItems: 'center',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: info.color,
                        transform: 'translateX(10px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                      }
                    }}
                  >
                    <Box sx={{ bgcolor: info.color, p: 1.5, borderRadius: 2, color: 'white', display: 'flex' }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{info.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{info.detail}</Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>

              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 800 }}>Follow Our Journey</Typography>
                <Stack direction="row" spacing={2}>
                  {socialLinks.map((social, index) => (
                    <IconButton 
                      key={index}
                      sx={{ 
                        bgcolor: 'white', 
                        color: social.color, 
                        border: '1px solid', 
                        borderColor: 'divider',
                        '&:hover': {
                          bgcolor: social.color,
                          color: 'white',
                          transform: 'translateY(-5px)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Form */}
          <Grid item xs={12} md={7}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 4, md: 6 }, 
                borderRadius: 8, 
                bgcolor: 'white', 
                border: '1px solid', 
                borderColor: 'divider',
                boxShadow: '0 30px 60px rgba(0,0,0,0.05)'
              }}
            >
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 800, fontFamily: 'Cinzel' }}>
                Send a Message
              </Typography>
              <ContactForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box sx={{ mt: 15, height: 450, bgcolor: 'divider', borderRadius: 0, overflow: 'hidden', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)' }}>
        <iframe 
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.24588726245!2d82.90870634645218!3d25.320901300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db763f9d271%3A0x194630a9e7f09a90!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714241000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Contact;
