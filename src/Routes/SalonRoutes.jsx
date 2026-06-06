import React from 'react'
import BookingTable from "../Salon/Booking/BookingTable";
import ServiceTable from "../Salon/Service/ServiceTable";
import TransactionTable from "../Salon/Transaction/TransactionTable";
import Category from "../Salon/Category/Category";
import { Route, Routes } from "react-router-dom";
import CreateServiceForm from "../Salon/Service/CreateServiceForm";
import HomePage from "../Salon/Home/HomePage";
import Payment from "../Salon/Payment/Payment";
import Profile from '../Salon/Profile/Profile';
import Notifications from '../Salon/Notifications/Notifications';

const SalonRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServiceTable />} />
      <Route path="/add-services" element={<CreateServiceForm />} />
      <Route path="/bookings" element={<BookingTable />} />
      <Route path="/categories" element={<Category />} />
      <Route path="/transactions" element={<TransactionTable />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/account" element={<Profile />} />
    </Routes>
  );
}

export default SalonRoutes