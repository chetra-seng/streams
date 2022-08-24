const INITIAL_STATE = {
  isSignedIn: null
};

export default function authReducer(state = INITIAL_STATE, action:any) {
  switch(action.type) {
    case 'SIGN_IN':
      return {...state, isSignedIn: true};
    case 'SIGN_OUT':
      return {...state, isSignedIn: false};
    default:
        return state;
  }
};