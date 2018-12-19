import * as actionTypes from '../actionTypes';
import axios from 'axios';
import config from '../../config.json';

export const fetchAll = () => {
  
  return(dispatch) => {
    dispatch(fetchStart());
    return axios.get(`${config.serverUrl}products`)
      .then(response => {
        dispatch(fetchSuccess(response.data))
      })
  }
}

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START
  }
}

export const fetchSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: data
  }
}