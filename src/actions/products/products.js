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

/* 
  Можно сделать отдельные экшны для выборки по категории
  Можно сделать один экшн selectCategory()
  и вызывать его на 21 строке перед "fetchSuccess(response.data)"
  Таким образом:
  - юзер выбирает категорию
  - вызываем "fetchByCategory"
  - отправляем запрос к бэку
  - приходит успешный ответ
  - в сторе меняем выбранную категорию (нужно подумать надо ли нам это)
  - диспатчим экшн "fetchSuccess"
*/
export const fetchByCategory = (categoryId) => {
  return(dispatch) => {
    dispatch(fetchStart());
    return axios.get(`${config.serverUrl}products/${categoryId}`)
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