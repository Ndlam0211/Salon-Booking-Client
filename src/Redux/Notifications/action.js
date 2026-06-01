import api from "../../config/api";

import {
  FETCH_NOTIFICATIONS_REQUEST,
  FETCH_NOTIFICATIONS_SUCCESS,
  FETCH_NOTIFICATIONS_FAILURE,
  FETCH_NOTIFICATIONS_BY_USER_REQUEST,
  FETCH_NOTIFICATIONS_BY_USER_SUCCESS,
  FETCH_NOTIFICATIONS_BY_USER_FAILURE,
  FETCH_NOTIFICATIONS_BY_SALON_REQUEST,
  FETCH_NOTIFICATIONS_BY_SALON_SUCCESS,
  FETCH_NOTIFICATIONS_BY_SALON_FAILURE,
  MARK_NOTIFICATION_AS_READ_REQUEST,
  MARK_NOTIFICATION_AS_READ_SUCCESS,
  MARK_NOTIFICATION_AS_READ_FAILURE,
  ADD_NOTIFICATION,
} from "./actionTypes";

const API_BASE_URL = "/api/v1/notifications";

export const fetchNotifications = () => async (dispatch) => {
  dispatch({
    type: FETCH_NOTIFICATIONS_REQUEST,
  });

  try {
    const response = await api.get(API_BASE_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    dispatch({
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_NOTIFICATIONS_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchNotificationsByUser = ({ userId, jwt }) => async (dispatch) => {
  dispatch({
    type: FETCH_NOTIFICATIONS_BY_USER_REQUEST,
  });

  try {
    const response = await api.get(`${API_BASE_URL}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: FETCH_NOTIFICATIONS_BY_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_NOTIFICATIONS_BY_USER_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchNotificationsBySalon = ({ salonId, jwt }) => async (dispatch) => {
  dispatch({
    type: FETCH_NOTIFICATIONS_BY_SALON_REQUEST,
  });

  try {
    const response = await api.get(`${API_BASE_URL}/salon-owner/salon/${salonId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: FETCH_NOTIFICATIONS_BY_SALON_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_NOTIFICATIONS_BY_SALON_FAILURE,
      payload: error.message,
    });
  }
};

export const markNotificationAsRead = ({ notificationId, jwt }) => async (dispatch) => {
  dispatch({
    type: MARK_NOTIFICATION_AS_READ_REQUEST,
  });

  try {
    const response = await api.put(
      `${API_BASE_URL}/${notificationId}/read`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    );

    dispatch({
      type: MARK_NOTIFICATION_AS_READ_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: MARK_NOTIFICATION_AS_READ_FAILURE,
      payload: error.message,
    });
  }
};

export const addNotification = (notification) => (dispatch) => {
  dispatch({    
    type: ADD_NOTIFICATION,
    payload: notification,
  });
};
