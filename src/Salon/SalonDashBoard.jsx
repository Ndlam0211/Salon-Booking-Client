import React, { useEffect } from "react";
import SalonDrawerList from "./components/SalonDrawerList";
import Navbar from "../Admin Salon/Navbar";
import SalonRoutes from "../Routes/SalonRoutes";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalonByOwner } from "../Redux/Salon/action";
import { fetchUser } from "../Redux/Auth/action";
import { fetchNotificationsBySalon } from "../Redux/Notifications/action";

const SalonDashBoard = () => {
  const dispatch = useDispatch();
  const { salon } = useSelector((store) => store);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    dispatch(fetchSalonByOwner(jwt));
    dispatch(fetchUser(jwt));
  }, []);

  useEffect(() => {
    dispatch(
      fetchNotificationsBySalon({
        salonId: salon.salon?.id,
        jwt: localStorage.getItem("jwt"),
      }),
    );
  }, [salon.salon]);
  return (
    <div className="min-h-screen">
      <Navbar DrawerList={SalonDrawerList} />
      <section className="lg:flex lg:h-[90vh]">
        <div className="hidden lg:block h-full">
          <SalonDrawerList />
        </div>
        <div className="p-10 w-full lg:w-[80%] overflow-y-auto">
          <SalonRoutes />
        </div>
      </section>
    </div>
  );
};

export default SalonDashBoard;
