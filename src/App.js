import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import greenTheme from './theme/greenTheme';
import Home from './Customer/Home/Home';
import SalonDetails from './Customer/Salon/Salon Details/SalonDetails';
import Bookings from './Customer/Booking/Bookings';
import Notifications from './Customer/Notification/Notifications';

function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      {/* <Home /> */}
      {/* <SalonDetails/> */}
      {/* <Bookings/> */}
      <Notifications />
    </ThemeProvider>
  );
}

export default App;
