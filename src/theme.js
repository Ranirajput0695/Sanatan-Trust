import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E65100', // Deep Saffron
      light: '#FF8A50',
      dark: '#AC1900',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2E7D32', // Forest Green
      light: '#60ad5e',
      dark: '#005005',
      contrastText: '#fff',
    },
    info: {
      main: '#1A237E', // Deep Indigo (used minimally)
      light: '#534bae',
      dark: '#000051',
      contrastText: '#fff',
    },
    background: {
      default: '#FFFAF0', // Floral White (Creamy)
      paper: '#ffffff',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
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
