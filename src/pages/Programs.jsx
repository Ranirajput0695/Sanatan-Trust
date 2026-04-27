import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Stack, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PublicIcon from '@mui/icons-material/Public';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Programs = () => {
  const maroon = "#800000";
  const saffron = "#FF9933";

  const programs = [
    {
      title: "Free Residential Education",
      subtitle: "Opportunity without financial barriers.",
      features: ["Free academic education (high school)", "Food & accommodation", "Structured daily routine & mentorship"],
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      desc: "An image of a disciplined, modern Gurukul classroom."
    },
    {
      title: "Gau Seva & Dairy Entrepreneurship",
      subtitle: "Sustainable rural enterprise and respect for nature.",
      features: ["Cow care (ethical Gau Seva)", "Dairy management", "Value creation through dairy products"],
      icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
      desc: "Students caring for cows in a clean, modern dairy setting."
    },
    {
      title: "Ayurvedic & Herbal Farming",
      subtitle: "Income generation through natural health systems.",
      features: ["Cultivation of medicinal plants", "Processing herbal products", "Sustainable farming"],
      icon: <LocalFloristIcon sx={{ fontSize: 40 }} />,
      desc: "Lush medicinal herb garden with students learning cultivation."
    },
    {
      title: "Karmakand & Vedic Service Training",
      subtitle: "Active and respected preservation of traditional knowledge.",
      features: ["Ritual sciences", "Authentic Vedic practices", "Community service guidance"],
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      desc: "Students performing a structured Vedic ceremony."
    }
  ];

  const impactFeatures = [
    {
      title: "Rural Education Support",
      icon: <PublicIcon sx={{ color: maroon }} />,
      desc: "Strengthening rural learning centers with resources and structured guidance."
    },
    {
      title: "Vocational Empowerment",
      icon: <WorkIcon sx={{ color: maroon }} />,
      desc: "Equipping individuals with market-ready skills rooted in traditional craftsmanship."
    },
    {
      title: "Sustainable Livelihood Models",
      icon: <AccountBalanceIcon sx={{ color: maroon }} />,
      desc: "Creating self-reliant community models that thrive on local resources and values."
    }
  ];

  return (
    <Box sx={{ bgcolor: 'white', color: 'text.primary', pb: 10 }}>
      {/* HEADER SECTION */}
      <Box 
        sx={{ 
          pt: { xs: 15, md: 22 }, 
          pb: { xs: 10, md: 15 }, 
          background: `linear-gradient(rgba(128, 0, 0, 0.03), rgba(255, 153, 51, 0.03))`,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h1" 
            sx={{ 
              fontFamily: '"Playfair Display", serif', 
              color: maroon, 
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              mb: 3,
              lineHeight: 1.2
            }}
          >
            Programs That Create Real Impact
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              fontFamily: '"Inter", sans-serif', 
              color: 'text.secondary', 
              fontWeight: 300,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.5rem' }
            }}
          >
            Interconnected pathways building education, livelihood, and long-term self-reliance. 
            From theory to real outcomes.
          </Typography>
        </Container>
      </Box>

      {/* PROGRAM GRID */}
      <Container maxWidth="lg" sx={{ mt: -5 }}>
        <Grid container spacing={4}>
          {programs.map((p, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 6,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'rgba(128, 0, 0, 0.1)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(128, 0, 0, 0.08)',
                    borderColor: saffron
                  }
                }}
              >
                {/* Image Placeholder */}
                <Box 
                  sx={{ 
                    height: 240, 
                    bgcolor: 'rgba(128, 0, 0, 0.05)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                   <Box sx={{ textAlign: 'center', p: 3 }}>
                     <Box sx={{ color: maroon, mb: 1 }}>{p.icon}</Box>
                     <Typography variant="caption" sx={{ color: maroon, opacity: 0.6, fontStyle: 'italic' }}>
                       {p.desc}
                     </Typography>
                   </Box>
                   <Box sx={{ position: 'absolute', top: 20, left: 20, bgcolor: saffron, color: 'white', px: 2, py: 0.5, borderRadius: 2, fontSize: '0.75rem', fontWeight: 800 }}>
                     PROGRAM {index + 1}
                   </Box>
                </Box>

                <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h4" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, mb: 1, color: maroon }}>
                    {p.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: saffron, fontWeight: 700, mb: 3, letterSpacing: 0.5 }}>
                    {p.subtitle}
                  </Typography>
                  
                  <Stack spacing={1.5} sx={{ mb: 4 }}>
                    {p.features.map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: saffron, mt: 1 }} />
                        <Typography variant="body1" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '0.95rem' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* IMPACT BEYOND CAMPUS SECTION */}
      <Box sx={{ py: 15, bgcolor: '#fafafa', mt: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, color: maroon, mb: 2 }}>
              From One Campus to Many Communities
            </Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: saffron, mx: 'auto', borderRadius: 2 }} />
          </Box>

          <Grid container spacing={6}>
            {impactFeatures.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                  <Typography variant="h5" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {feature.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Typography variant="h6" sx={{ color: maroon, fontWeight: 300, fontStyle: 'italic', maxWidth: 700, mx: 'auto' }}>
              "Building self-reliant, value-driven, and stable communities."
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CALL TO ACTION */}
      <Container maxWidth="md" sx={{ py: 15 }}>
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 6, md: 10 }, 
            textAlign: 'center', 
            bgcolor: maroon, 
            color: 'white', 
            borderRadius: 8,
            boxShadow: '0 30px 60px rgba(128, 0, 0, 0.15)'
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: '"Playfair Display", serif', mb: 6, lineHeight: 1.5 }}>
            Whether you contribute resources, time, or expertise—you become part of building a system that creates knowledge, dignity, and self-reliance.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: saffron, 
                color: 'white', 
                px: 6, 
                py: 2, 
                fontSize: '1rem', 
                fontWeight: 800,
                '&:hover': { bgcolor: '#e68a00' }
              }}
            >
              Sponsor a Student
            </Button>
            <Button 
              variant="outlined" 
              sx={{ 
                color: 'white', 
                borderColor: 'white', 
                px: 6, 
                py: 2, 
                fontSize: '1rem', 
                fontWeight: 800,
                borderWidth: 2,
                '&:hover': { borderColor: saffron, color: saffron, borderWidth: 2 }
              }}
            >
              Partner With Us
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Programs;
