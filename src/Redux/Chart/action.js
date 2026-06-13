import api from "../../config/api";
import {
  FETCH_EARNINGS_REQUEST,
  FETCH_EARNINGS_SUCCESS,
  FETCH_EARNINGS_FAILURE,
  FETCH_BOOKINGS_REQUEST,
  FETCH_BOOKINGS_SUCCESS,
  FETCH_BOOKINGS_FAILURE,
} from "./actionTypes";

const API_BASE_URL = "/api/v1/bookings/chart";

export const fetchEarnings = (token) => async (dispatch) => {
  dispatch({ type: FETCH_EARNINGS_REQUEST });
  try {
    const response = await api.get(`${API_BASE_URL}/earnings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Earnings data:", response.data); // Debugging log
    dispatch({ type: FETCH_EARNINGS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching earnings:", error); // Debugging log
    dispatch({ type: FETCH_EARNINGS_FAILURE, payload: error.response?.data || error.message });
  }
};

export const fetchBookings = (token) => async (dispatch) => {
  dispatch({ type: FETCH_BOOKINGS_REQUEST });
  try {
    const response = await api.get(`${API_BASE_URL}/bookings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Bookings data:", response.data); // Debugging log
    dispatch({ type: FETCH_BOOKINGS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching bookings:", error); // Debugging log
    dispatch({ type: FETCH_BOOKINGS_FAILURE, payload: error.response?.data || error.message });
  }
};
