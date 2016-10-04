import { AUTH_USER, UNAUTH_USER } from '../actions/types';


export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticate: true };
    case UNAUTH_USER:
      return { ...state, authenticate: false };   
    default:
      return state;
  }
}
