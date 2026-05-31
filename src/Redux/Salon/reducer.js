import {
  CREATE_SALON_REQUEST,
  CREATE_SALON_SUCCESS,
  CREATE_SALON_FAILURE,
  UPDATE_SALON_REQUEST,
  UPDATE_SALON_SUCCESS,
  UPDATE_SALON_FAILURE,
  FETCH_SALON_REQUEST,
  FETCH_SALON_SUCCESS,
  FETCH_SALON_FAILURE,
  FETCH_SALON_BY_ID_REQUEST,
  FETCH_SALON_BY_ID_SUCCESS,
  FETCH_SALON_BY_ID_FAILURE,
  FETCH_SALON_BY_OWNER_REQUEST,
  FETCH_SALON_BY_OWNER_SUCCESS,
  FETCH_SALON_BY_OWNER_FAILURE,
  SEARCH_SALON_REQUEST,
  SEARCH_SALON_SUCCESS,
  SEARCH_SALON_FAILURE,
} from "./actionTypes";

const initialState = {
  salons: [],
  searchSalons: [],
  salon: null,
  loading: false,
  error: null,
};

export const salonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALON_REQUEST:
    case CREATE_SALON_REQUEST:
    case UPDATE_SALON_REQUEST:
    case FETCH_SALON_BY_ID_REQUEST:
    case FETCH_SALON_BY_OWNER_REQUEST:
    case SEARCH_SALON_REQUEST:
      return { ...state, loading: true };

    case FETCH_SALON_SUCCESS:
      return { ...state, salons: action.payload, loading: false };
    case CREATE_SALON_SUCCESS:
      return { ...state, salon: action.payload, loading: false };
    case UPDATE_SALON_SUCCESS:
      return { ...state, salon: action.payload, loading: false };
    case FETCH_SALON_BY_ID_SUCCESS:
    case FETCH_SALON_BY_OWNER_SUCCESS:
      return { ...state, salon: action.payload, loading: false };
    case SEARCH_SALON_SUCCESS:
      return { ...state, searchSalons: action.payload, loading: false };

    case FETCH_SALON_FAILURE:
    case CREATE_SALON_FAILURE:
    case UPDATE_SALON_FAILURE:
    case FETCH_SALON_BY_ID_FAILURE:
    case FETCH_SALON_BY_OWNER_FAILURE:
    case SEARCH_SALON_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
