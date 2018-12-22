import * as actionTypes from '../actionTypes';
import axios from 'axios';
import config from '../../config.json';


export const fetchAll = () => {
  
  return (dispatch) => {
    return axios.get(`${config.serverUrl}categories`)
      .then(response => {
        dispatch( fetchSuccess(response.data) )
      })
      .catch(error => {dispatch( fetchError(error) )})
  }
}

export const fetchSuccess = (data) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: data
  }
}

export const fetchError = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAILED,
    payload: error
  }
}