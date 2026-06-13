import api from "../../config/api";

import {
  CREATE_BOOKING_REQUEST,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAILURE,
  FETCH_CUSTOMER_BOOKINGS_REQUEST,
  FETCH_CUSTOMER_BOOKINGS_SUCCESS,
  FETCH_CUSTOMER_BOOKINGS_FAILURE,
  FETCH_SALON_BOOKINGS_REQUEST,
  FETCH_SALON_BOOKINGS_SUCCESS,
  FETCH_SALON_BOOKINGS_FAILURE,
  FETCH_BOOKING_BY_ID_REQUEST,
  FETCH_BOOKING_BY_ID_SUCCESS,
  FETCH_BOOKING_BY_ID_FAILURE,
  UPDATE_BOOKING_STATUS_REQUEST,
  UPDATE_BOOKING_STATUS_SUCCESS,
  UPDATE_BOOKING_STATUS_FAILURE,
  GET_SALON_REPORT_REQUEST,
  GET_SALON_REPORT_SUCCESS,
  GET_SALON_REPORT_FAILURE,
  FETCH_BOOKED_SLOTS_REQUEST,
  FETCH_BOOKED_SLOTS_SUCCESS,
  FETCH_BOOKED_SLOTS_FAILURE,
} from "./actionTypes";

const API_BASE_URL = "/api/v1/bookings";

export const createBooking = ({jwt, salonId, bookingData}) => async (dispatch) => {
  dispatch({
    type: CREATE_BOOKING_REQUEST,
  });

  try {
    const { data } = await api.post(API_BASE_URL, bookingData, {
      headers: {
        Authorization: `Bearer ${jwt}`,

      },
      params: {
        salonId,
        paymentMethod: "STRIPE",
      },
    });

    console.log("Created booking:", data);
    window.location.href = data.data.paymentLinkUrl;

    dispatch({
      type: CREATE_BOOKING_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_BOOKING_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchCustomerBookings = (jwt) => async (dispatch) => {
  dispatch({
    type: FETCH_CUSTOMER_BOOKINGS_REQUEST,
  });

  try {
    const { data } = await api.get(`${API_BASE_URL}/customer`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("fetch bookings by customer: ", data)

    dispatch({
      type: FETCH_CUSTOMER_BOOKINGS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CUSTOMER_BOOKINGS_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchSalonBookings = (jwt) => async (dispatch) => {
  dispatch({
    type: FETCH_SALON_BOOKINGS_REQUEST,
  });

  try {
    const { data } = await api.get(`${API_BASE_URL}/salon`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("fetch booking by salon: ", data)

    dispatch({
      type: FETCH_SALON_BOOKINGS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SALON_BOOKINGS_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchBookingById = (bookingId) => async (dispatch) => {
  dispatch({
    type: FETCH_BOOKING_BY_ID_REQUEST,
  });

  try {
    const { data } = await api.get(`${API_BASE_URL}/${bookingId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    dispatch({
      type: FETCH_BOOKING_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_BOOKING_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};

export const updateBookingStatus =
  ({ bookingId, status, jwt }) =>
  async (dispatch) => {
    dispatch({
      type: UPDATE_BOOKING_STATUS_REQUEST,
    });

    try {
      const { data } = await api.put(
        `${API_BASE_URL}/${bookingId}/status`,
        null,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          params: {
            status
          },
        },
      );

      dispatch({
        type: UPDATE_BOOKING_STATUS_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_BOOKING_STATUS_FAILURE,
        payload: error.message,
      });
    }
  };

export const getSalonReport = (jwt) => async (dispatch) => {
  dispatch({
    type: GET_SALON_REPORT_REQUEST,
  });

  try {
    const { data } = await api.get(`${API_BASE_URL}/report`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: GET_SALON_REPORT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SALON_REPORT_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchBookedSlots =
  ({ salonId, serviceId, date }) =>
  async (dispatch) => {
    dispatch({
      type: FETCH_BOOKED_SLOTS_REQUEST,
    });

    try {
      const { data } = await api.get(`${API_BASE_URL}/booked-slots`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        params: {
          salonId,
          serviceId,
          date,
        },
      });

      dispatch({
        type: FETCH_BOOKED_SLOTS_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_BOOKED_SLOTS_FAILURE,
        payload: error.message,
      });
    }
  };
