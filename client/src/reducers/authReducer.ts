const INITIAL_STATE = {
  isSignedIn: null,
  id: null
};

export default function authReducer(state = INITIAL_STATE, action:any) {
  switch(action.type) {
    case 'SIGN_IN':
      return {...state, isSignedIn: true, id: action.payload};
    case 'SIGN_OUT':
      return {...state, isSignedIn: false, id: null};
    default:
        return state;
  }
};