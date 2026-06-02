import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import ServiceCard from "./ServiceCard";
import { Button, Divider, Modal } from "@mui/material";
import { RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";
import SelectedServiceList from "./SelectedServiceList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchServicesBySalon } from "../../../Redux/Salon Services/action";
import { createBooking } from "../../../Redux/Booking/action";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const SalonServiceDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false)
  const [bookingData, setBookingData] = useState({
    services: [],
    time: null,
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const { category, service } = useSelector((store) => store);

  const handleCategoryClick = (category) => () => {
    setSelectedCategory(category);
  };

  const handleSelectService = (service) => {
    setBookingData((prevState) => ({
      ...prevState,
      services: [...prevState.services, service],
    }));
  };

  const handleRemoveService = (id) => {
    setBookingData((prevState) => ({
      ...prevState,
      services: [...prevState.services.filter((service) => service.id !== id)],
    }));
  };

  const handleModalClose = () => {setOpen(false)};
  const handleModalOpen = () => {setOpen(true)};

  const handleBooking =() => {
    const serviceIds = bookingData.services.map((service) => service.id)

    dispatch(createBooking({
      jwt: localStorage.getItem("jwt"),
      salonId: id,
      bookingData: {
        serviceIds: serviceIds,
        startTime: bookingData.time
      }
    }))
  }
  
  useEffect(() => {
    if (id) {
      dispatch(
        fetchServicesBySalon({
          salonId: id,
          jwt: localStorage.getItem("jwt"),
          categoryId: selectedCategory,
        }),
      );
    }
  }, [id, selectedCategory]);
  return (
    <div className="lg:flex gap-5 h-[90vh] mt-10">
      <section className="space-y-5 border-r lg:w-[25%] pr-5">
        {category.categories?.map((item, index) => (
          <CategoryCard
            handleCategoryClick={handleCategoryClick(item.id)}
            selectedCategory={selectedCategory}
            item={item}
          />
        ))}
      </section>

      <section className="space-y-2 lg:w-[50%] px-5 lg:px-20 overflow-y-auto">
        {service.services?.map((item) => (
          <div className="space-y-4">
            <ServiceCard onSelect={handleSelectService} item={item} />
            <Divider />
          </div>
        ))}
      </section>

      <section className="lg:w-[25%]">
        <div className="border rounded-md p-5">
          {bookingData.services.length > 0 ? (
            <div>
              <div className="flex items-center gap-2">
                <ShoppingCart sx={{ fontSize: "30px", color: "green" }} />
                <h1 className="font-thin text-sm">Selected Services</h1>
              </div>
              <SelectedServiceList
                selectedServices={bookingData.services}
                onRemove={handleRemoveService}
              />
              <Button
                onClick={handleModalOpen}
                sx={{ py: ".7rem" }}
                fullWidth
                variant="contained"
              >
                Book Now
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 items-center justify-center">
              <RemoveShoppingCart sx={{ fontSize: "30px", color: "green" }} />
              <h1>Not selected</h1>
            </div>
          )}
        </div>
      </section>

      <Modal open={open} onClose={handleModalClose}>
        <div className="absolute p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[600px] bg-secondary-color shadow-lg lg:flex gap-5">
          <div className="w-[50%] border-r pr-5">
            <h1 className="text-xl font-semibold">Time Slot Not Available</h1>
          </div>

          <div className="space-y-5">
            <SelectedServiceList
              onRemove={handleRemoveService}
              selectedServices={bookingData.services}
            />

            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
              <DateTimePicker
                sx={{ with: "100%" }}
                fullWidth
                label="Select Time Slot"
                onChange={(value) => {
                  if (value) {
                    const localDate = value.format("YYYY-MM-DDTHH:mm:ss");
                    setBookingData((prevState) => ({
                      ...prevState,
                      time: localDate,
                    }));
                  }
                }}
              />
            </LocalizationProvider>

            <div className="">
              <Button fullWidth variant="outlined" onClick={handleBooking}>
                Book
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SalonServiceDetails;
