import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
  AUTH_USER, 
  UNAUTH_USER, 
  AUTH_ERROR, 
  FETCH_MESSAGE 
} from './types';


const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good:
        // - Update state to indicate user is auth'd
        dispatch({ type: AUTH_USER });
        
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        
        // - Redirect to route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad:
        // - Show error to user
        dispatch(authError('Bad Sign-in Information'));
      });
  };
}

export function signupUser({ email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
      
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(error => {
        dispatch(authError(error.response.data.error));
      });
  };
}

export function signoutUser(error) {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function fetchMessage() {
  // we can also use here redux promise
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  };
}
