import React, { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";
import { useDispatch, useSelector } from "react-redux";
import { addNotification, fetchNotificationsByUser } from "../../Redux/Notifications/action";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const Notifications = () => {
  const dispatch = useDispatch();
  const { auth, notification } = useSelector((store) => store);

  useEffect(() => {
    if (auth.user?.id) {
      dispatch(
        fetchNotificationsByUser({
          userId: auth.user?.id,
          jwt: localStorage.getItem("jwt"),
        }),
      );
    }
  }, [auth.user?.id]);

  // realtime notifications
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    if (auth.user?.id) {
      const sock = new SockJS("http://localhost:8000/api/v1/notifications/ws");
      const stomp = Stomp.over(sock);
      setStompClient(stomp);
    }
  }, [auth.user?.id]);

  useEffect(() => {
    if (stompClient) {
      stompClient.connect(
        {},
        () => {
          stompClient.subscribe(
            `/notification/user/${auth.user?.id}`,
            (message) => {
              const receivedMessage = JSON.parse(message.body)
              console.log("received notification from server: ", receivedMessage);
              dispatch(addNotification(receivedMessage))
            },
          );
        },
        (error) => console.log("subcribe failed: ", error),
      );
    }
  }, [stompClient, auth.user?.id]);
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
