import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import greenTheme from './theme/greenTheme';

function App() {
  return (
    <ThemeProvider theme={greenTheme}>

    </ThemeProvider>
  );
}

export default App;
