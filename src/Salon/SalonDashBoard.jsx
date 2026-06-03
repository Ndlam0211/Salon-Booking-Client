import React from 'react'
import SalonDrawerList from './components/SalonDrawerList'
import Navbar from '../Admin Salon/Navbar'
import BookingTable from './Booking/BookingTable'
import ServiceTable from './Service/ServiceTable'
import TransactionTable from './Transaction/TransactionTable'
import Category from './Category/Category'
import { Route, Routes } from 'react-router-dom'
import CreateServiceForm from './Service/CreateServiceForm'
import HomePage from "./Home/HomePage";
import Notifications from "../Customer/Notification/Notifications"

const SalonDashBoard = () => {
  return (
    <div className="min-h-screen">
      <Navbar DrawerList={SalonDrawerList} />
      <section className="lg:flex lg:h-[90vh]">
        <div className="hidden lg:block h-full">
          <SalonDrawerList />
        </div>
        <div className="p-10 w-full lg:w-[80%] overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServiceTable />} />
            <Route path="/add-service" element={<CreateServiceForm />} />
            <Route path="/bookings" element={<BookingTable />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/transactions" element={<TransactionTable />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default SalonDashBoard