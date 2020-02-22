export const userInterfaceActions = {
  SET_USER_INTERFACE_MODE: 'SET_USER_INTERFACE_MODE'
};

export const userInterfaceMode = {
  LIGHT_MODE: 'LIGHT_MODE',
  DARK_MODE: 'DARK_MODE'
};

export function setUserInterfaceMode(userInterfaceMode) {
  return {
    type: userInterfaceActions.SET_USER_INTERFACE_MODE,
    payload: { userInterfaceMode }
  };
}
