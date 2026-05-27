import { ArrowRightAlt } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const BookingCard = () => {
  return (
    <div className="p-5 rounded-md bg-slate-100 md:flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Pablo Salon</h1>
        <div className="pl-5">
          <li>Hair Cut</li>
          <li>Massage Therapy</li>
          <li>Hair Color</li>
        </div>
        <div className="">
          <p>
            Time & Date <ArrowRightAlt /> 2026-06-11
          </p>
          <p>12:00:00 To 12:45:00</p>
        </div>
      </div>

      <div className="space-y-2">
        <img
          className="h-28 w-28"
          src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731066070722-1f3637.jpeg"
          alt=""
        />
        <p className="text-center">99đ</p>
        <Button className="w-full" variant="outlined" color="error">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default BookingCard;
