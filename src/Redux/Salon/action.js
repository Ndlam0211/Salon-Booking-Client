import api from "../../config/api";

import {
  CREATE_SALON_FAILURE,
  CREATE_SALON_REQUEST,
  CREATE_SALON_SUCCESS,
  FETCH_SALON_BY_ID_FAILURE,
  FETCH_SALON_BY_ID_REQUEST,
  FETCH_SALON_BY_ID_SUCCESS,
  FETCH_SALON_BY_OWNER_FAILURE,
  FETCH_SALON_BY_OWNER_REQUEST,
  FETCH_SALON_BY_OWNER_SUCCESS,
  FETCH_SALON_FAILURE,
  FETCH_SALON_REQUEST,
  FETCH_SALON_SUCCESS,
  SEARCH_SALON_FAILURE,
  SEARCH_SALON_REQUEST,
  SEARCH_SALON_SUCCESS,
  UPDATE_SALON_FAILURE,
  UPDATE_SALON_REQUEST,
  UPDATE_SALON_SUCCESS,
} from "./actionTypes";

const API_BASE_URL = "/api/v1/salons";

export const createSalon = (reqData) => async (dispatch) => {
  dispatch({
    type: CREATE_SALON_REQUEST,
  });

  try {
    const jwt = "";

    const response = await api.post(API_BASE_URL, reqData.salonDetails, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    reqData.navigate("/salon-dashboard");
    dispatch({
      type: CREATE_SALON_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_SALON_FAILURE,
      payload: error.message,
    });
  }
};

export const updateSalon =
  ({ salonId, salon, jwt }) =>
  async (dispatch) => {
    dispatch({
      type: UPDATE_SALON_REQUEST,
    });

    try {
      const response = await api.put(`${API_BASE_URL}/${salonId}`, salon, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({
        type: UPDATE_SALON_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SALON_FAILURE,
        payload: error.message,
      });
    }
  };

export const fetchSalons = () => async (dispatch) => {
  dispatch({
    type: FETCH_SALON_REQUEST,
  });

  try {
    const response = await api.get(API_BASE_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    console.log("Fetched salons:", response); // Debugging log

    dispatch({
      type: FETCH_SALON_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SALON_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchSalonById = (salonId) => async (dispatch) => {
  dispatch({
    type: FETCH_SALON_BY_ID_REQUEST,
  });

  try {
    const response = await api.get(`${API_BASE_URL}/${salonId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    console.log("Fetched salon by ID:", response.data.data); // Debugging log

    dispatch({
      type: FETCH_SALON_BY_ID_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SALON_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchSalonByOwner = (jwt) => async (dispatch) => {
  dispatch({
    type: FETCH_SALON_BY_OWNER_REQUEST,
  });

  try {
    const response = await api.get(`${API_BASE_URL}/owner`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("fetch salon by owner: ", response)

    dispatch({
      type: FETCH_SALON_BY_OWNER_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SALON_BY_OWNER_FAILURE,
      payload: error.message,
    });
  }
};

export const searchSalons = (jwt, city) => async (dispatch) => {
  dispatch({
    type: SEARCH_SALON_REQUEST,
  });

  try {
    const response = await api.get(`${API_BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      params: {
        city: city
      }
    });

    dispatch({
      type: SEARCH_SALON_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_SALON_FAILURE,
      payload: error.message,
    });
  }
};