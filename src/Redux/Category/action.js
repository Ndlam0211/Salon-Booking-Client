import api from "../../config/api";

import {
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_CATEGORY_BY_ID_REQUEST,
  GET_CATEGORY_BY_ID_SUCCESS,
  GET_CATEGORY_BY_ID_FAILURE,
  GET_CATEGORIES_BY_SALON_REQUEST,
  GET_CATEGORIES_BY_SALON_SUCCESS,
  GET_CATEGORIES_BY_SALON_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
} from "./actionTypes";

const API_BASE_URL = "/api/v1/categories";

export const createCategory = ({categoryData, jwt}) => async (dispatch) => {
  dispatch({
    type: CREATE_CATEGORY_REQUEST,
  });

  try {
    const response = await api.post(`${API_BASE_URL}/salon-owner`, categoryData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("create category response: ", response);

    dispatch({
      type: CREATE_CATEGORY_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    console.log("error create category: ", error)
    dispatch({
      type: CREATE_CATEGORY_FAILURE,
      payload: error.message,
    });
  }
};

export const getAllCategories = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_CATEGORIES_REQUEST,
  });

  try {
    const response = await api.get(API_BASE_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    dispatch({
      type: GET_ALL_CATEGORIES_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORIES_FAILURE,
      payload: error.message,
    });
  }
};

export const getCategoryById = (categoryId) => async (dispatch) => {
  dispatch({
    type: GET_CATEGORY_BY_ID_REQUEST,
  });

  try {
    const response = await api.get(`${API_BASE_URL}/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    dispatch({
      type: GET_CATEGORY_BY_ID_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORY_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};

export const getCategoriesBySalon = ({jwt, salonId}) => async (dispatch) => {
  dispatch({
    type: GET_CATEGORIES_BY_SALON_REQUEST,
  });

  try {
    const response = await api.get(`${API_BASE_URL}/salon/${salonId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Fetched categories by salon:", response.data);

    dispatch({
      type: GET_CATEGORIES_BY_SALON_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORIES_BY_SALON_FAILURE,
      payload: error.message,
    });
  }
};

export const deleteCategory = (categoryId) => async (dispatch) => {
  dispatch({
    type: DELETE_CATEGORY_REQUEST,
  });

  try {
    await api.delete(`${API_BASE_URL}/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    dispatch({
      type: DELETE_CATEGORY_SUCCESS,
      payload: categoryId,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CATEGORY_FAILURE,
      payload: error.message,
    });
  }
};
