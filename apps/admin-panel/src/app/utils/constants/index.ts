// // Env variables
export const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;
export const APP_NAME = import.meta.env.VITE_REACT_APP_NAME;
export const IMAGE_BASE_URL = import.meta.env.VITE_REACT_APP_IMAGE_BASE;
export const SOCKET_BASE = import.meta.env.VITE_REACT_SOCKET_BASE;
export const GOOGLE_MAPS_API_KEY = import.meta.env
  .VITE_REACT_GOOGLE_MAPS_API_KEY;

// Local Storage Variables
export const LocalStorageKeys = {
  user: `user${APP_NAME}`,
  accessToken: `accessToken${APP_NAME}`,
  deviceId: `deviceId${APP_NAME}`,
  fcmToken: `fcmToken${APP_NAME}`,
};
