import api from "../../config/api";

import {
  PROCEED_PAYMENT_REQUEST,
  PROCEED_PAYMENT_SUCCESS,
  PROCEED_PAYMENT_FAILURE,
} from "./actionTypes";

const API_BASE_URL = "/api/v1/payments";

export const proceedPayment = ({ paymentId, paymentLinkId, jwt }) => async (dispatch) => {
  dispatch({
    type: PROCEED_PAYMENT_REQUEST,
  });

  try {
    const response = await api.patch(`${API_BASE_URL}/proceed`, null, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      params: {
        paymentId,
        paymentLinkId,
      },
    });
    console.log("Payment response:", response.data);

    dispatch({
      type: PROCEED_PAYMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Payment processing error:", error);
    dispatch({
      type: PROCEED_PAYMENT_FAILURE,
      payload: error.response ? error.response.data : error.message,
    });
  }
};
