import api from "../../config/api";

import {
  FETCH_REVIEWS_REQUEST,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAILURE,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAILURE,
  UPDATE_REVIEW_REQUEST,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_FAILURE,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILURE,
} from "./actionTypes";

const API_BASE_URL = "/api/v1/reviews";

export const fetchReviews = ({ salonId, jwt }) => async (dispatch) => {
  dispatch({
    type: FETCH_REVIEWS_REQUEST,
  });

  try {
    const response = await api.get(`${API_BASE_URL}/salon/${salonId}`);
    console.log("Fetched Reviews:", response.data);

    dispatch({
      type: FETCH_REVIEWS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_REVIEWS_FAILURE,
      payload: error.message,
    });
  }
};

export const createReview = ({salonId, reviewData, jwt}) => async (dispatch) => {
  dispatch({
    type: CREATE_REVIEW_REQUEST,
  });

  try {
    const response = await api.post(`${API_BASE_URL}/salon/${salonId}`, reviewData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Created Review:", response.data);

    dispatch({
      type: CREATE_REVIEW_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_REVIEW_FAILURE,
      payload: error.message,
    });
  }
};

export const updateReview =
  ({ reviewId, reviewData, jwt }) =>
  async (dispatch) => {
    dispatch({
      type: UPDATE_REVIEW_REQUEST,
    });

    try {
      const response = await api.put(
        `${API_BASE_URL}/${reviewId}`,
        reviewData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      );

      dispatch({
        type: UPDATE_REVIEW_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_REVIEW_FAILURE,
        payload: error.message,
      });
    }
  };

export const deleteReview = ({ reviewId, jwt }) => async (dispatch) => {
  dispatch({
    type: DELETE_REVIEW_REQUEST,
  });

  try {
    await api.delete(`${API_BASE_URL}/${reviewId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: reviewId,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAILURE,
      payload: error.message,
    });
  }
};
