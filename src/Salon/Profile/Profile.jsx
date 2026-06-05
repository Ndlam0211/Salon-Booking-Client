import React from "react";
import ProfileFildCard from "./ProfileFildCard";
import Divider from "@mui/material/Divider";

const Profile = () => {
  return (
    <div className="lg:px-20 lg:bottom-20 space-y-20">
      <div className="w-full lg:w-[70%]">
        <h1 className="text-5xl font-bold pb-5">Pablo Salon</h1>
        <section className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <img
              className="w-full rounded-md h-[15rem] object-cover"
              src={
                "https://res.cloudinary.com/dxoqwusir/image/upload/v1732934203/barber-5497152_1280_zgcao8.jpg"
              }
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full rounded-md h-[15rem] object-cover"
              src={
                "https://res.cloudinary.com/dxoqwusir/image/upload/v1732934203/barber-5497152_1280_zgcao8.jpg"
              }
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full rounded-md h-[15rem] object-cover"
              src={
                "https://res.cloudinary.com/dxoqwusir/image/upload/v1732934217/beauty-salon-4043096_1280_itrjdr.jpg"
              }
              alt=""
            />
          </div>
        </section>
      </div>

      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Owner Details</h1>
        </div>
        <div className="">
          <ProfileFildCard keys={"owner name"} value={"Pablo"} />
          <Divider />
          <ProfileFildCard
            keys={"email address"}
            value={"pablo@example.com"}
          />
          <Divider />
          <ProfileFildCard keys={"role"} value={"SALON OWNER"} />
        </div>
      </div>

      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Salon Details</h1>
        </div>
        <div className="">
          <ProfileFildCard keys={"salon name"} value={"Pablo Salon"} />
          <Divider />
          <ProfileFildCard
            keys={"salon address"}
            value={"123 Main Street, City, State"}
          />
          <Divider />
          <ProfileFildCard keys={"open time"} value={"10:00am"} />
          <Divider />
          <ProfileFildCard keys={"close time"} value={"19:00pm"} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
