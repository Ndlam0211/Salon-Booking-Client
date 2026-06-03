import { ArrowRightAlt } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const BookingCard = ({item}) => {
  return (
    <div className="p-5 rounded-md bg-slate-100 md:flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{item.salon.name}</h1>
        <div className="pl-5">
          {item.services.map((service) => (
            <li>{service.name}</li>
          ))}
        </div>
        <div className="">
          <p>
            Time & Date <ArrowRightAlt /> {item.startTime.split("T")[0]}
          </p>
          <p>{item.startTime.split("T")[1]} To {item.endTime.split("T")[1]}</p>
        </div>
      </div>

      <div className="space-y-2">
        <img
          className="h-28 w-28"
          src={item.salon.images[0]}
          alt=""
        />
        <p className="text-center">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(item.totalPrice)}
        </p>
        <Button className="w-full" variant="outlined" color="error">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default BookingCard;
