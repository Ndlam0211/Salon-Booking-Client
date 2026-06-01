import {
  PROCEED_PAYMENT_REQUEST,
  PROCEED_PAYMENT_SUCCESS,
  PROCEED_PAYMENT_FAILURE,
} from "./actionTypes";

const initialState = {
  success: null,
  loading: false,
  error: null,
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROCEED_PAYMENT_REQUEST:
      return { ...state, loading: true, success: null, error: null };

    case PROCEED_PAYMENT_SUCCESS:
      return {
        ...state,
        success: action.payload,
        loading: false,
        error: null,
      };

    case PROCEED_PAYMENT_FAILURE:
      return { ...state, loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
