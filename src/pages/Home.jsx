import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

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
      color: "primary"
    }
  ];

  const stats = [
    { label: "Students Enrolled", value: "5000+" },
    { label: "Courses Offered", value: "25+" },
    { label: "Expert Gurus", value: "40+" },
    { label: "Years of Legacy", value: "15+" }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Hero />
      


      {/* SECTION: Mission */}
      <Box component="section" sx={{ py: { xs: 10, md: 15 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                 <Paper 
                  elevation={0}
                  sx={{ 
                    aspectRatio: '1/1', 
                    bgcolor: 'primary.light', 
                    borderRadius: 8, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '8rem',
                    boxShadow: '20px 20px 60px rgba(230, 81, 0, 0.1), -20px -20px 60px #ffffff',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <AutoAwesomeIcon sx={{ fontSize: '10rem', color: 'white', opacity: 0.8 }} />
                </Paper>
                <Box sx={{ position: 'absolute', top: -30, left: -30, width: '100%', height: '100%', border: '2px solid', borderColor: 'secondary.light', borderRadius: 8, zIndex: 1 }} />
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: 3 }}>Our Purpose</Typography>
                <Typography variant="h2" sx={{ lineHeight: 1.1, fontFamily: 'Cinzel', fontWeight: 800 }}>
                  Preserving the <Box component="span" sx={{ color: 'primary.main' }}>Eternal Flame</Box> of Wisdom
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Sanatana Dharma Educational Trust is dedicated to the preservation and dissemination of the eternal wisdom of the Indian subcontinent. We believe that ancient knowledge holds the key to solving modern challenges.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Our mission is to create a bridge between traditional Vedic scholarship and contemporary academic excellence, fostering a generation that is spiritually grounded and intellectually vibrant.
                </Typography>
                <Box>
                  <Button 
                    component={Link} 
                    to="/about" 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    sx={{ py: 2, px: 6, fontSize: '1rem' }}
                  >
                    Learn More About Us
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* SECTION: Programs */}
      <Box component="section" sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: 3 }}>Curriculum</Typography>
            <Typography variant="h2" sx={{ mb: 3, fontFamily: 'Cinzel', fontWeight: 800 }}>
              Sacred Learning Paths
            </Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: 'secondary.main', mx: 'auto', borderRadius: 2 }} />
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
      
      {/* SECTION: Quote */}
      <Box sx={{ py: 15, bgcolor: 'primary.main', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: -50, right: -50, fontSize: '20rem', opacity: 0.1, fontFamily: 'serif' }}>“</Box>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontStyle: 'italic', mb: 4, fontFamily: 'Cinzel', fontWeight: 400, lineHeight: 1.4 }}>
            "Knowledge is that which liberates. The goal of education is not information, but the transformation of the soul."
          </Typography>
          <Box sx={{ width: 40, height: 2, bgcolor: 'white', mx: 'auto', mb: 3, opacity: 0.5 }} />
          <Typography variant="h6" sx={{ letterSpacing: 4, fontWeight: 300 }}>ANCIENT VEDIC WISDOM</Typography>
        </Container>
      </Box>

      {/* SECTION: Contact */}
      <Box component="section" sx={{ py: { xs: 10, md: 15 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} md={5}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="h2" sx={{ mb: 2, fontFamily: 'Cinzel', fontWeight: 800 }}>Get in Touch</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                    Have questions about our programs or want to get involved? Our doors and hearts are always open.
                  </Typography>
                </Box>
                
                <Stack spacing={3}>
                  <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default', borderRadius: 4, display: 'flex', gap: 3, alignItems: 'center' }}>
                    <Box sx={{ bgcolor: 'primary.main', p: 1.5, borderRadius: 2, color: 'white', display: 'flex' }}>📍</Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Our Location</Typography>
                      <Typography variant="body2" color="text.secondary">Kashi, Uttar Pradesh, India</Typography>
                    </Box>
                  </Paper>
                  <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.default', borderRadius: 4, display: 'flex', gap: 3, alignItems: 'center' }}>
                    <Box sx={{ bgcolor: 'secondary.main', p: 1.5, borderRadius: 2, color: 'white', display: 'flex' }}>📧</Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Email Us</Typography>
                      <Typography variant="body2" color="text.secondary">info@sanatantrust.edu</Typography>
                    </Box>
                  </Paper>
                </Stack>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: 8, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}>
                <ContactForm />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
