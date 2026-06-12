import React from "react";
import ProfileFildCard from "./ProfileFildCard";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";

const Profile = () => {
  const {salon, auth} = useSelector(store=>store)
  return (
    <div className="lg:px-20 lg:bottom-20 space-y-20">
      <div className="w-full lg:w-[70%]">
        <h1 className="text-5xl font-bold pb-5">{salon.salon?.name}</h1>
        <section className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <img
              className="w-full rounded-md h-[15rem] object-cover"
              src={salon.salon?.images[0]}
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full rounded-md h-[15rem] object-cover"
              src={salon.salon?.images[1]}
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full rounded-md h-[15rem] object-cover"
              src={salon.salon?.images[2]}
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
          <ProfileFildCard
            keys={"owner name"}
            value={auth.user?.fullName || auth.user?.username}
          />
          <Divider />
          <ProfileFildCard keys={"email address"} value={auth.user?.email} />
          <Divider />
          <ProfileFildCard keys={"role"} value={"SALON OWNER"} />
        </div>
      </div>

      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Salon Details</h1>
        </div>
        <div className="">
          <ProfileFildCard keys={"salon name"} value={salon.salon?.name} />
          <Divider />
          <ProfileFildCard
            keys={"salon address"}
            value={salon.salon?.address}
          />
          <Divider />
          <ProfileFildCard
            keys={"open time"}
            value={salon.salon?.openingTime}
          />
          <Divider />
          <ProfileFildCard keys={"close time"} value={salon.salon?.closingTime} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
