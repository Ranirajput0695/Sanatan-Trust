import React from 'react';
import { Box, Container, Typography, Grid, Paper, Divider, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HomeIcon from '@mui/icons-material/Home';
import NatureIcon from '@mui/icons-material/Nature';
import ShieldIcon from '@mui/icons-material/Shield';

// Import images
import gurukulImg from '../assets/gurukul.png';
import valuesImg from '../assets/values.png';

const About = () => {
  const theme = useTheme();

  const missionPoints = [
    "Integrate Shastra (knowledge) and Shastra (strength)",
    "Provide holistic education",
    "Build disciplined, capable individuals",
    "Promote self-reliance and community impact"
  ];

  const activities = [
    { title: "Education", icon: <AutoStoriesIcon />, desc: "Ancient wisdom meets modern science." },
    { title: "Residential Development", icon: <HomeIcon />, desc: "Gurukul style living for character building." },
    { title: "Sustainability", icon: <NatureIcon />, desc: "Rooted in eco-friendly Vedic principles." },
    { title: "Protection & Responsibility", icon: <ShieldIcon />, desc: "Nurturing the future guardians of dharma." }
  ];

  return (
    <Box sx={{ pt: { xs: 8, md: 10 } }}>
      {/* SECTION 1: Hero */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 10 }, 
          background: 'linear-gradient(135deg, #FF9933 0%, #FFB366 100%)', 
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle background decoration */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: -50, 
            right: -50, 
            width: 300, 
            height: 300, 
            borderRadius: '50%', 
            background: 'rgba(255,255,255,0.1)',
            zIndex: 0
          }} 
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 800, 
              fontFamily: 'Cinzel, serif', 
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              textShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            About Sanatana Trust
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 300, 
              opacity: 0.95, 
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              fontSize: { xs: '1rem', md: '1.5rem' }
            }}
          >
            Sanatan Wisdom. Building Futures.
          </Typography>
        </Container>
      </Box>

      {/* SECTION 2: Vision */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box 
                component="img" 
                src={gurukulImg} 
                alt="Modern Gurukul" 
                sx={{ 
                  width: '100%', 
                  borderRadius: 6, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  display: 'block'
                }} 
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ color: 'text.primary', mb: 2, fontFamily: 'Cinzel, serif', fontWeight: 700 }}>
                Our Vision
              </Typography>
              <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mb: 4 }} />
              <Typography variant="h5" sx={{ lineHeight: 1.6, color: 'text.primary', fontWeight: 400, mb: 3 }}>
                Creating a legacy of wisdom.
              </Typography>
              <Typography sx={{ fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.8 }}>
                A replicable national model of education where students return to their communities and build self-reliant institutions rooted in Sanatana Dharma.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 3: Mission */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fafafa' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 8, color: 'text.primary', fontFamily: 'Cinzel, serif', fontWeight: 700 }}>
            Our Mission
          </Typography>
          <Grid container spacing={4}>
            {missionPoints.map((point, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    borderRadius: 4, 
                    background: 'white',
                    border: '1px solid rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    transition: 'all 0.4s ease',
                    '&:hover': { 
                      transform: 'translateY(-10px)',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                      borderColor: 'primary.main'
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      borderRadius: '50%', 
                      bgcolor: 'rgba(255, 153, 51, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.4 }}>{point}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECTION 4: Why This Matters */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box 
                sx={{ 
                  p: { xs: 4, md: 6 }, 
                  bgcolor: 'primary.main', 
                  color: 'white', 
                  borderRadius: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0,43,91,0.2)'
                }}
              >
                <Typography variant="h3" sx={{ mb: 4, fontFamily: 'Cinzel, serif', fontWeight: 700, color: 'white' }}>
                  Why This Matters
                </Typography>
                <Typography sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9 }}>
                  In the gap between modern education and traditional values, we find a growing disconnect. Modern systems focus on information, but often neglect the formation of character and spiritual grounding.
                </Typography>
                <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.9 }}>
                  We provide a balanced system where knowledge, action, and values coexist, creating leaders who are not just capable, but also compassionate and rooted.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
               <Box 
                  component="img"
                  src={valuesImg}
                  alt="Value based education"
                  sx={{ 
                    width: '100%',
                    borderRadius: 8, 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
               />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 5: What We Do */}
      <Box 
        sx={{ 
          py: { xs: 6, md: 8 }, 
          background: 'linear-gradient(180deg, #e67e00 0%, #ff9933 100%)', 
          color: 'white',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="xl">
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center', 
              mb: 8, 
              color: 'white', 
              fontFamily: 'Cinzel, serif', 
              fontWeight: 700,
              fontSize: { xs: '1.8rem', md: '3rem' }
            }}
          >
            What We Do
          </Typography>
          
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)', // 2x2 on mobile
                md: 'repeat(4, 1fr)'  // 1x4 on desktop
              },
              gap: { xs: 2, md: 4 },
              justifyContent: 'center'
            }}
          >
            {activities.map((item, index) => (
              <Box 
                key={index}
                sx={{ 
                  textAlign: 'center', 
                  p: { xs: 2, md: 4 }, 
                  bgcolor: 'rgba(255,255,255,0.03)', 
                  borderRadius: { xs: 4, md: 6 },
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.08)',
                    transform: 'translateY(-10px)',
                    borderColor: 'primary.main',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }
                }}
              >
                <Box 
                  sx={{ 
                    width: { xs: 50, md: 80 }, 
                    height: { xs: 50, md: 80 }, 
                    bgcolor: 'primary.main', 
                    color: 'white', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    mb: { xs: 1.5, md: 3 },
                    fontSize: { xs: '1.2rem', md: '2.5rem' },
                    boxShadow: '0 10px 20px rgba(255, 153, 51, 0.4)'
                  }}
                >
                  {item.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: { xs: 1, md: 2 }, 
                    fontSize: { xs: '0.8rem', md: '1.2rem' }, 
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    lineHeight: 1.2
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  sx={{ 
                    opacity: 0.8, 
                    lineHeight: 1.5, 
                    fontSize: { xs: '0.75rem', md: '0.95rem' }
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 6: Founder Message */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Background Accent */}
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: -100, 
            left: -100, 
            width: 400, 
            height: 400, 
            borderRadius: '50%', 
            background: 'rgba(255, 153, 51, 0.03)',
            zIndex: 0
          }} 
        />
        
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                color: 'rgba(255, 153, 51, 0.08)', 
                position: 'absolute', 
                top: -80, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                fontSize: { xs: '10rem', md: '18rem' }, 
                fontFamily: 'serif',
                zIndex: -1 
              }}
            >
              “
            </Typography>
            <Box sx={{ pt: 4 }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontStyle: 'italic', 
                  color: 'primary.dark', 
                  lineHeight: 1.5, 
                  mb: 5,
                  fontWeight: 400,
                  fontSize: { xs: '1.5rem', md: '2.2rem' },
                  fontFamily: 'Cinzel, serif'
                }}
              >
                This is not just an institution. It is a long-term system to restore knowledge, dignity, and self-reliance.
              </Typography>
              <Divider sx={{ width: 80, mx: 'auto', mb: 4, borderColor: 'primary.main', borderWidth: 2 }} />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 800, 
                  letterSpacing: 4, 
                  color: 'text.primary',
                  textTransform: 'uppercase'
                }}
              >
                The Founder
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
