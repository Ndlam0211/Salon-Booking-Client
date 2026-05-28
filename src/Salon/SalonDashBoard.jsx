import React from 'react'
import SalonDrawerList from './components/SalonDrawerList'
import Navbar from '../Admin Salon/Navbar'
import BookingTable from './Booking/BookingTable'
import ServiceTable from './Service/ServiceTable'
import TransactionTable from './Transaction/TransactionTable'

const SalonDashBoard = () => {
  return (
    <div className='min-h-screen'>
      <Navbar DrawerList={SalonDrawerList}/>
      <section className='lg:flex lg:h-[90vh]'>
        <div className="hidden lg:block h-full">
          <SalonDrawerList/>
        </div>
        <div className="p-10 w-full lg:w-[80%] overflow-y-auto">
          {/* <BookingTable/> */}
          {/* <ServiceTable/> */}
          <TransactionTable/>
        </div>
      </section>
    </div>
  )
}

export default SalonDashBoard