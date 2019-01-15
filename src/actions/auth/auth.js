import * as actionTypes from '../actionTypes';
import axios from 'axios';
import config from '../../config.json';

export const onLoginAsAdmin = (credentials) => {
  
  return (dispatch) => {
    return axios.post(`${config.serverUrl}auth/loginasadmin`, credentials)
      .then(response => {
        dispatch( onLoginAsAdminSuccess(response.data) )
      })
      .catch(error => {
        console.log(error);
        dispatch( onLoginAsAdminError(error) )
      })
  }
}

export const onLoginAsAdminSuccess = (data) => {
  // {token: 'f12312asfasfasfasf'plkas'fl}
  console.log(data);
}

export const onLoginAsAdminError = (error) => {
  return {
    type: actionTypes.LOGIN_ADMIN_FAILED,
    payload: error
  }
}