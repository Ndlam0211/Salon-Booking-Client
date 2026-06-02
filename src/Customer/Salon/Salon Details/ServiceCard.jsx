import { FiberManualRecord } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const ServiceCard = ({ item, onSelect }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-5">
        <div className="space-y-1 w-[60%]">
          <h1 className="text-2xl font-semibold">{item.name}</h1>
          <p className="text-gray-500 text-sm">{item.description}</p>
          <div className="flex items-center gap-3">
            <p>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(item.price)}
            </p>
            <FiberManualRecord sx={{ fontSize: "10px", color: "gray" }} />
            <p>{item.duration} mins</p>
          </div>
        </div>

        <div className="space-y-3">
          <img
            className="w-32 h-32 object-cover rounded-md"
            src={
              item.image ||
              "https://res.cloudinary.com/dxoqwusir/image/upload/v1732883653/barber-3173419_1280_juevxz.jpg"
            }
            alt={item.name}
          />
          <Button onClick={() => onSelect(item)} fullWidth variant="outlined">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
