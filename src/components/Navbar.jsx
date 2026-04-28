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
import logo from '../assets/logo.jpeg';

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
    <Box sx={{ p: 4, bgcolor: 'primary.main', color: 'white', display: 'flex', flexDirection: 'column', gap: 2 }}>
      <List sx={{ pt: 0 }}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                textAlign: 'left',
                py: 1.5,
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
                  fontWeight: 700,
                  fontSize: '1.2rem',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        component={NavLink}
        to="/contact"
        onClick={handleDrawerToggle}
        sx={{
          bgcolor: 'white',
          color: 'primary.main',
          fontWeight: 800,
          fontSize: '1.1rem',
          py: 1.5,
          borderRadius: '12px',
          textTransform: 'none',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.9)'
          }
        }}
      >
        Contact Us
      </Button>
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
              component="img"
              src={logo}
              alt="Sanatan Trust Logo"
              sx={{
                height: { xs: 55, md: 70 },
                width: 'auto',
                mixBlendMode: 'multiply',
                filter: 'contrast(1.1)',
                clipPath: 'inset(0 0 0 10px)'
              }}
            />
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
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '90%', 
            maxWidth: 350, 
            margin: '80px auto 0 auto', 
            borderRadius: '16px', 
            bgcolor: '#E65100',
            border: '1px solid rgba(255,255,255,0.2)',
            height: 'auto'
          },
          '& .MuiBackdrop-root': {
            bgcolor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(3px)'
          }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
