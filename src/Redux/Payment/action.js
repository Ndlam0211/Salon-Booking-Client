import api from "../../config/api";

import {
  PROCEED_PAYMENT_REQUEST,
  PROCEED_PAYMENT_SUCCESS,
  PROCEED_PAYMENT_FAILURE,
} from "./actionTypes";

const API_BASE_URL = "/api/v1/payments";

export const proceedPayment = ({ paymentId, paymentRequest, jwt }) => async (dispatch) => {
  dispatch({
    type: PROCEED_PAYMENT_REQUEST,
  });

  try {
    const response = await api.patch(
      `${API_BASE_URL}/${paymentId}/proceed`,
      paymentRequest,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    );
    console.log("Payment response:", response.data);

    dispatch({
      type: PROCEED_PAYMENT_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    console.error("Payment processing error:", error);
    dispatch({
      type: PROCEED_PAYMENT_FAILURE,
      payload: error.response ? error.response.data : error.message,
    });
  }
};
