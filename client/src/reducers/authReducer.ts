import { Action } from "../action-types";
import { ActionType } from "../action-types/action-types";

const INITIAL_STATE = {
  isSignedIn: null,
  id: null
};

export default function authReducer(state = INITIAL_STATE, action: Action) {
  switch(action.type) {
    case ActionType.SIGN_IN:
      return {...state, isSignedIn: true, id: action.payload};
    case ActionType.SIGN_OUT:
      return {...state, isSignedIn: false, id: null};
    default:
        return state;
  }
};