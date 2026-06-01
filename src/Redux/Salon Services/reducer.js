import {
  CREATE_SERVICE_REQUEST,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_FAILURE,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAILURE,
  FETCH_SERVICES_BY_SALON_REQUEST,
  FETCH_SERVICES_BY_SALON_SUCCESS,
  FETCH_SERVICES_BY_SALON_FAILURE,
  FETCH_SERVICE_BY_ID_REQUEST,
  FETCH_SERVICE_BY_ID_SUCCESS,
  FETCH_SERVICE_BY_ID_FAILURE,
} from "./actionTypes";

const initialState = {
  services: [],
  service: null,
  loading: false,
  error: null,
};

export const salonServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SERVICE_REQUEST:
    case UPDATE_SERVICE_REQUEST:
    case FETCH_SERVICES_BY_SALON_REQUEST:
    case FETCH_SERVICE_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };

    case CREATE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        service: action.payload,
      };

    case UPDATE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        service: action.payload,
      };

    case FETCH_SERVICES_BY_SALON_SUCCESS:
      return { ...state, services: action.payload, loading: false };

    case FETCH_SERVICE_BY_ID_SUCCESS:
      return { ...state, service: action.payload, loading: false };

    case CREATE_SERVICE_FAILURE:
    case UPDATE_SERVICE_FAILURE:
    case FETCH_SERVICES_BY_SALON_FAILURE:
    case FETCH_SERVICE_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
