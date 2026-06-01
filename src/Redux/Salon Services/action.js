import api from "../../config/api";

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

const API_BASE_URL = "/api/v1/service-offerings";

export const createService =
  ({ serviceData, jwt }) =>
  async (dispatch) => {
    dispatch({
      type: CREATE_SERVICE_REQUEST,
    });

    try {
      const { data } = await api.post(
        `${API_BASE_URL}/salon-owner`,
        serviceData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      );

      dispatch({
        type: CREATE_SERVICE_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_SERVICE_FAILURE,
        payload: error.message,
      });
    }
  };

export const updateService =
  ({ serviceId, serviceData, jwt }) =>
  async (dispatch) => {
    dispatch({
      type: UPDATE_SERVICE_REQUEST,
    });

    try {
      const { data } = await api.put(
        `${API_BASE_URL}/${serviceId}`,
        serviceData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      );

      dispatch({
        type: UPDATE_SERVICE_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SERVICE_FAILURE,
        payload: error.message,
      });
    }
  };

export const fetchServicesBySalon =
  ({ salonId, jwt, categoryId }) =>
  async (dispatch) => {
    dispatch({
      type: FETCH_SERVICES_BY_SALON_REQUEST,
    });

    try {
      const { data } = await api.get(`${API_BASE_URL}/salon/${salonId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        params: { categoryId },
      });
      console.log("Fetched services:", data);

      dispatch({
        type: FETCH_SERVICES_BY_SALON_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_SERVICES_BY_SALON_FAILURE,
        payload: error.message,
      });
    }
  };

export const fetchServiceById =
  ({ serviceId, jwt }) =>
  async (dispatch) => {
    dispatch({
      type: FETCH_SERVICE_BY_ID_REQUEST,
    });

    try {
      const { data } = await api.get(`${API_BASE_URL}/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      dispatch({
        type: FETCH_SERVICE_BY_ID_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_SERVICE_BY_ID_FAILURE,
        payload: error.message,
      });
    }
  };
