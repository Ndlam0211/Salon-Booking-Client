import api from "../../config/api";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./actionTypes";

const API_BASE_URL = "/api/v1/auth";

export const login = (loginData) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  try {
    const response = await api.post(`${API_BASE_URL}/login`, loginData.data);

    console.log("Login response:", response);
     const user = response.data.data;

     if (user?.accessToken) {
       localStorage.setItem("jwt", user.accessToken);
       if (user?.role === "ADMIN") {
         loginData.navigate("/admin");
       } else if (user?.role === "SALON_OWNER") {
         loginData.navigate("/salon-dashboard");
       } else {
         loginData.navigate("/");
       }
     }

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error,
    });
  }
};

export const register = (registerData) => async (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });

  try {
    const response = await api.post(`${API_BASE_URL}/signup`, registerData.data);

    console.log("Registration response:", response);
    const user = response.data.data;

    if(user?.accessToken) {
      localStorage.setItem("jwt", user.accessToken);
      registerData.navigate("/");
    }

    dispatch({
      type: REGISTER_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error,
    });
  }
};

export const logout = () => {
    return async (dispatch) => {
        dispatch({ type: LOGOUT });
        localStorage.clear();
    }
};

export const fetchUser = (jwt) => async (dispatch) => {
  dispatch({
    type: FETCH_USER_REQUEST,
  });

  try {
    const response = await api.get(`/api/v1/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("Fetch user response:", response);

    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.message,
    });
  }
};
