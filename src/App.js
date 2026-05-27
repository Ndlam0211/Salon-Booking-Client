import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import greenTheme from './theme/greenTheme';
import SalonDashBoard from "./Seller/SalonDashBoard";
import { Routes, Route } from 'react-router-dom';
import CustomerRoutes from './Routes/CustomerRoutes';

function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      <Routes>
        <Route path='/salon-dashboard/*' element={<SalonDashBoard/>} />
        <Route path='*' element={<CustomerRoutes/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
