import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import SockJS from 'sockjs-client';
import Stomp from "stompjs";
import { addNotification } from '../Redux/Notifications/action';

const useNotificationWebsocket = ({id, type}) => {
  // realtime notifications
  const dispatch = useDispatch()
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    if (id) {
      const sock = new SockJS("http://localhost:8000/api/v1/notifications/ws");
      const stomp = Stomp.over(sock);
      setStompClient(stomp);
    }
  }, [id]);

  useEffect(() => {
    if (stompClient) {
      stompClient.connect(
        {},
        () => {
          stompClient.subscribe(
            `/notification/${type}/${id}`,
            (message) => {
              const receivedMessage = JSON.parse(message.body);
              console.log(
                "received notification from server: ",
                receivedMessage,
              );
              dispatch(addNotification(receivedMessage));
            },
          );
        },
        (error) => console.log("subcribe failed: ", error),
      );
    }
  }, [stompClient, id]);
};

export default useNotificationWebsocket