import { userInterfaceActions, userInterfaceMode } from '../actions';

const initialUserInterfaceState = {
  userInterfaceMode: userInterfaceMode.LIGHT_MODE
};

export function userInterfaceReducer(state = initialUserInterfaceState, action) {
  switch (action.type) {
    case userInterfaceActions.SET_USER_INTERFACE_MODE:
      return Object.assign({}, state, {
        userInterfaceMode: action.payload.userInterfaceMode
      });
    default:
      return state;
  }
}
