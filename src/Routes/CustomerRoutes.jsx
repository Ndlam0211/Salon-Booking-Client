import React from "react";
import Home from "../Customer/Home/Home";
import SalonDetails from "../Customer/Salon/Salon Details/SalonDetails";
import Bookings from "../Customer/Booking/Bookings";
import Notifications from "../Customer/Notification/Notifications";
import Navbar from "../Customer/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const CustomerRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/salon/:id" element={<SalonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default CustomerRoutes;
