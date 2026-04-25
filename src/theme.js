import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9933', // Saffron
      light: '#ffb366',
      dark: '#e67e00',
      contrastText: '#fff',
    },
    secondary: {
      main: '#138808', // Green
      light: '#1db90b',
      dark: '#0e6406',
      contrastText: '#fff',
    },
    info: {
      main: '#000080', // Blue
      light: '#0000cc',
      dark: '#00004d',
      contrastText: '#fff',
    },
    background: {
      default: '#FDFBF7', // Cream
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "sans-serif"',
    h1: {
      fontFamily: '"Cinzel", "serif"',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Cinzel", "serif"',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Cinzel", "serif"',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Cinzel", "serif"',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Cinzel", "serif"',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Cinzel", "serif"',
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          borderRadius: 24,
        },
      },
    },
  },
});

export default theme;
