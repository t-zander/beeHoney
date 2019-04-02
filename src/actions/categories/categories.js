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

export const deleteCategory = (id) => {
  return dispatch => {
    axios.delete(`${config.serverUrl}categories/${id}`)
    .then(response => {
      dispatch(deleteCategorySuccess(id))
    })
    .catch(err => {
      dispatch(deleteCategoryFail(err))
    })
  }
}

export const deleteCategorySuccess = (id) => {
  return {
    type: actionTypes.DELETE_CATEGORY_SUCCESS,
    payload: id
  }
}

export const deleteCategoryFail = (err) => {
  return {
    type: actionTypes.DELETE_CATEGORY_FAIL,
    payload: err
  }
}