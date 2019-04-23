import * as actionTypes from "../actionTypes";
import axios from "axios";
import config from "../../config.json";

export const fetchAll = () => {
  return dispatch => {
    dispatch(fetchStart());
    return axios
      .get(`${config.serverUrl}about`)
      .then(response => {
        dispatch(fetchSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
  };
};

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_ABOUT_START
  };
};

export const fetchSuccess = data => {
  return {
    type: actionTypes.FETCH_ABOUT_SUCCESS,
    payload: data
  };
};

export const fetchError = error => {
  return {
    type: actionTypes.FETCH_ABOUT_FAILED,
    payload: error
  };
};
