import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Hero from '../components/Hero';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Home = () => {
  const programs = [
    {
      title: "Vedic Wisdom",
      description: "Explore the ancient hymns and philosophies of the four Vedas in their original Sanskrit form.",
      icon: <MenuBookIcon />,
      color: "primary"
    },
    {
      title: "Sanskrit Bhasha",
      description: "Master the language of the gods through our structured immersive learning programs.",
      icon: <SchoolIcon />,
      color: "secondary"
    },
    {
      title: "Dhyana & Yoga",
      description: "Traditional meditation techniques passed down through generations for mental peace.",
      icon: <VolunteerActivismIcon />,
      color: "info"
    }
  ];

  return (
    <Box>
      <Hero />
      
      {/* Mission Section */}
      <Box component="section" sx={{ py: 15, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={10} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box 
                  sx={{ 
                    aspectRatio: '1/1', 
                    bgcolor: 'rgba(255, 153, 51, 0.05)', 
                    borderRadius: 10, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '8rem',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.08)'
                  }}
                >
                  🏛️
                </Box>
                <Box sx={{ position: 'absolute', top: -40, left: -40, width: 160, height: 160, bgcolor: 'rgba(19, 136, 8, 0.05)', borderRadius: '50%', filter: 'blur(40px)', zIndex: -1 }} />
                <Box sx={{ position: 'absolute', bottom: -40, right: -40, width: 240, height: 240, bgcolor: 'rgba(0, 0, 128, 0.05)', borderRadius: '50%', filter: 'blur(60px)', zIndex: -1 }} />
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: 2 }}>Our Purpose</Typography>
              <Typography variant="h3" component="h2" sx={{ mb: 4, color: 'info.main', lineHeight: 1.2, fontFamily: 'Cinzel' }}>
                Rooted in Tradition, <br />
                <Box component="span" sx={{ color: 'primary.main' }}>Blooming for the Future</Box>
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Sanatana Dharma Educational Trust is dedicated to the preservation and dissemination of the eternal wisdom of the Indian subcontinent. We believe that ancient knowledge holds the key to solving modern challenges.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Our mission is to create a bridge between traditional Vedic scholarship and contemporary academic excellence, fostering a generation that is spiritually grounded and intellectually vibrant.
              </Typography>
              <Button variant="contained" color="primary" size="large" sx={{ boxShadow: 6 }}>
                Read Full Mission
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Programs Section */}
      <Box component="section" sx={{ py: 15, bgcolor: '#fdfbf7' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: 2 }}>Education</Typography>
            <Typography variant="h3" component="h2" sx={{ mb: 2, color: 'info.main', fontFamily: 'Cinzel' }}>
              Our Programs
            </Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto' }} />
          </Box>
          
          <Grid container spacing={4}>
            {programs.map((program, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  title={program.title}
                  description={program.description}
                  icon={program.icon}
                  color={program.color}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Get Involved Section */}
      <Box component="section" sx={{ py: 15, position: 'relative', overflow: 'hidden', bgcolor: 'info.main', color: 'white' }}>
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            width: '40%', 
            height: '100%', 
            bgcolor: 'rgba(255,255,255,0.03)', 
            transform: 'skewX(-20deg) translateX(20%)' 
          }} 
        />
        
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={7}>
              <Typography variant="h2" sx={{ mb: 4, fontFamily: 'Cinzel', color: 'white' }}>Get Involved</Typography>
              <Typography variant="h5" sx={{ mb: 6, opacity: 0.9, fontWeight: 300, lineHeight: 1.6 }}>
                Be a part of our journey to preserve the eternal dharma. Whether through volunteering, teaching, or financial support, every contribution creates a ripple of positive change.
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 3, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }, transition: 'all 0.3s' }}>
                    <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>Volunteer</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>Lend your skills and time to our various community projects.</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 3, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }, transition: 'all 0.3s' }}>
                    <Typography variant="h6" sx={{ color: 'secondary.main', mb: 1 }}>Sponsor a Student</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>Provide the gift of education to those in need.</Typography>
                  </Box>
                </Grid>
              </Grid>
              
              <Button 
                variant="contained" 
                sx={{ 
                  mt: 6,
                  bgcolor: 'white', 
                  color: 'info.main', 
                  px: 8, 
                  py: 2, 
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: '#f5f5f5' }
                }}
              >
                Start Your Journey
              </Button>
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Box 
                sx={{ 
                  p: 6, 
                  bgcolor: 'rgba(255,255,255,0.05)', 
                  borderRadius: 8, 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Typography variant="h5" sx={{ mb: 4, textAlign: 'center', fontFamily: 'Cinzel' }}>Support the Mission</Typography>
                <Box sx={{ textAlign: 'center' }}>
                   <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>Your financial support helps us maintain our facilities and digital outreach.</Typography>
                   <Button variant="contained" color="primary" fullWidth size="large">
                     Donate Now
                   </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box component="section" sx={{ py: 15, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={5}>
              <Typography variant="h3" sx={{ mb: 4, color: 'info.main', fontFamily: 'Cinzel' }}>
                Get in Touch
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.2rem', lineHeight: 1.8 }}>
                Have questions about our programs or want to get involved? We'd love to hear from you.
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ color: 'primary.main', fontSize: '1.5rem' }}>📍</Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Our Location</Typography>
                    <Typography color="text.secondary">Kashi, Uttar Pradesh, India</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ color: 'primary.main', fontSize: '1.5rem' }}>📧</Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Email Address</Typography>
                    <Typography color="text.secondary">info@sanatantrust.edu</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
