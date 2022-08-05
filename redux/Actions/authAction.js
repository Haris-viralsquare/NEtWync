import {LOGIN_REQUEST, LOGOUT_REQUEST} from './actionType';

export function Login(obj) {
  return {
    type: LOGIN_REQUEST,
    payload:obj,
  };
}

export function logout() {
  return {type: LOGOUT_REQUEST};
}