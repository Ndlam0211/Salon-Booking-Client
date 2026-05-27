import { createTheme } from '@mui/material/styles';

const greenTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#019031', // Green color
    },
    secondary: {
      main: '#EAF0F1', // Lighter green color
    },
  }
});

export default greenTheme;