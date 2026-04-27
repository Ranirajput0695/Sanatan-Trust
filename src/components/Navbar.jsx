import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  IconButton, 
  useScrollTrigger, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Divider
} from '@mui/material';
import { NavLink, Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' }
  ];

  const drawer = (
    <Box sx={{ textAlign: 'center', p: 3, width: 280, bgcolor: 'primary.main', color: 'white', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box 
          sx={{ 
            width: 50, 
            height: 50, 
            bgcolor: 'secondary.main', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 2,
            boxShadow: 3
          }}
        >
          <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>ॐ</Typography>
        </Box>
        <Typography variant="h6" sx={{ fontFamily: 'Cinzel', fontWeight: 'bold' }}>Sanatan Trust</Typography>
      </Box>

      <Divider sx={{ mb: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={NavLink}
              to={item.path}
              sx={{ 
                textAlign: 'center', 
                borderRadius: 2, 
                mb: 1,
                color: location.pathname === item.path ? 'secondary.main' : 'white',
                bgcolor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)', color: 'white' }
              }}
              onClick={handleDrawerToggle}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{ 
                  fontWeight: 600,
                  fontSize: '1.1rem'
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>


    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: trigger ? 'rgba(230, 81, 0, 0.98)' : 'rgba(230, 81, 0, 0.9)',
        boxShadow: trigger ? 4 : 0,
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-in-out',
        color: 'white',
        py: trigger ? 0.5 : 1,
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo Section */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            <Box 
              sx={{ 
                width: 40, 
                height: 40, 
                bgcolor: 'secondary.main', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mr: 1.5,
                boxShadow: 2
              }}
            >
              <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>ॐ</Typography>
            </Box>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 800,
                letterSpacing: '.1rem',
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'Cinzel',
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              Sanatan Trust
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            {navItems.map((item) => (
              <Typography 
                key={item.name}
                component={NavLink}
                to={item.path}
                sx={{ 
                  color: location.pathname === item.path ? 'white' : 'rgba(255,255,255,0.85)', 
                  fontWeight: location.pathname === item.path ? 800 : 500, 
                  cursor: 'pointer',
                  textDecoration: 'none',
                  '&:hover': { color: 'white' },
                  transition: 'all 0.2s',
                  fontSize: '0.95rem',
                  borderBottom: location.pathname === item.path ? '2px solid white' : '2px solid transparent',
                  pb: 0.5
                }}
              >
                {item.name}
              </Typography>
            ))}

          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, borderRadius: '20px 0 0 20px', bgcolor: '#E65100' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
