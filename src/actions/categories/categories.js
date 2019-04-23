import * as actionTypes from "../actionTypes";
import axios from "axios";
import config from "../../config.json";
import { reset } from "redux-form";

export const fetchAll = () => {
  return dispatch => {
    return axios
      .get(`${config.serverUrl}categories`)
      .then(response => {
        dispatch(fetchSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
  };
};

export const fetchSuccess = data => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: data
  };
};

export const fetchError = error => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAILED,
    payload: error
  };
};

export const addCategory = name => {
  return dispatch => {
    axios
      .post(`${config.serverUrl}categories`, { name })
      .then(response => {
        dispatch(addCategorySuccess(response.data));
        dispatch(reset("addCategory"));
      })
      .catch(err => {
        dispatch(addCategoryFail(err));
      });
  };
};

export const addCategorySuccess = data => {
  return {
    type: actionTypes.ADD_CATEGORY_SUCCESS,
    payload: data
  };
};

export const addCategoryFail = err => {
  return {
    type: actionTypes.ADD_CATEGORY_FAIL,
    payload: err
  };
};

export const deleteCategory = id => {
  return dispatch => {
    axios
      .delete(`${config.serverUrl}categories/${id}`)
      .then(response => {
        dispatch(deleteCategorySuccess(id));
      })
      .catch(err => {
        dispatch(deleteCategoryFail(err));
      });
  };
};

export const deleteCategorySuccess = id => {
  return {
    type: actionTypes.DELETE_CATEGORY_SUCCESS,
    payload: id
  };
};

export const deleteCategoryFail = err => {
  return {
    type: actionTypes.DELETE_CATEGORY_FAIL,
    payload: err
  };
};

export const editCategory = (id, name) => {
  return dispatch => {
    axios
      .patch(`${config.serverUrl}categories/${id}`, { name })
      .then(response => {
        dispatch(editCategorySuccess(response.data));
      })
      .catch(err => {
        dispatch(editCategoryFail(err));
      });
  };
};

export const editCategorySuccess = data => {
  return {
    type: actionTypes.EDIT_CATEGORY_SUCCESS,
    payload: data
  };
};

export const editCategoryFail = err => {
  return {
    type: actionTypes.EDIT_CATEGORY_FAIL,
    payload: err
  };
};
