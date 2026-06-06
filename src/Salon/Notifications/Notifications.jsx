import React from "react";
import NotificationCard from "../../Customer/Notification/NotificationCard";
import { useSelector } from "react-redux";

const Notifications = () => {
  const { notification } = useSelector((store) => store);

  return (
    <div className="px-5 md:flex flex-col items-center mt-10 min-h-screen">
      <div className="">
        <h1 className="text-3xl font-bold py-5">Notifications</h1>
      </div>

      <div className="space-y-4 md:w-[35rem]">
        {notification.notifications.map((item) => (
          <NotificationCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
