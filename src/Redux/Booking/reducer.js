import {
  CREATE_BOOKING_REQUEST,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAILURE,
  FETCH_CUSSOMER_BOOKINGS_REQUEST,
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

const initialState = {
  bookings: [],
  booking: null,
  bookedSlots: [],
  report: null,
  loading: false,
  error: null,
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOKING_REQUEST:
    case FETCH_CUSSOMER_BOOKINGS_REQUEST:
    case FETCH_SALON_BOOKINGS_REQUEST:
    case FETCH_BOOKING_BY_ID_REQUEST:
    case UPDATE_BOOKING_STATUS_REQUEST:
    case GET_SALON_REPORT_REQUEST:
    case FETCH_BOOKED_SLOTS_REQUEST:
      return { ...state, loading: true };

    case CREATE_BOOKING_SUCCESS:
      return { ...state, booking: action.payload, loading: false };

    case FETCH_CUSTOMER_BOOKINGS_SUCCESS:
    case FETCH_SALON_BOOKINGS_SUCCESS:
      return { ...state, bookings: action.payload, loading: false };

    case FETCH_BOOKING_BY_ID_SUCCESS:
      return { ...state, booking: action.payload, loading: false };

    case UPDATE_BOOKING_STATUS_SUCCESS:
        return {
          ...state,
          loading: false,
          bookings: state.bookings.map((booking) =>
            booking.id === action.payload.id ? action.payload : booking
          ),
        };

    case GET_SALON_REPORT_SUCCESS:
      return { ...state, report: action.payload, loading: false };

    case FETCH_BOOKED_SLOTS_SUCCESS:
      return { ...state, bookedSlots: action.payload, loading: false };

    case CREATE_BOOKING_FAILURE:
    case FETCH_CUSTOMER_BOOKINGS_FAILURE:
    case FETCH_SALON_BOOKINGS_FAILURE:
    case FETCH_BOOKING_BY_ID_FAILURE:
    case UPDATE_BOOKING_STATUS_FAILURE:
    case GET_SALON_REPORT_FAILURE:
    case FETCH_BOOKED_SLOTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
