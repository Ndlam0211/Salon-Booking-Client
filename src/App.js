import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import greenTheme from './theme/greenTheme';
import Home from './Customer/Home/Home';
import SalonDetails from './Customer/Salon/Salon Details/SalonDetails';

function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      {/* <Home /> */}
      <SalonDetails/>
    </ThemeProvider>
  );
}

export default App;
