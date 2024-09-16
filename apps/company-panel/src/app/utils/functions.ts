import { authStore } from '../Services/store/auth';
import { IMAGE_BASE_URL, LocalStorageKeys } from './constants';
import { setAxiosInterceptor } from './constants/interceptor';

//To concate the path for the public folder
export const toAbsoluteUrl = (pathname: string) =>
  window.location.origin + pathname;

// Rehydrate store and set axios default headers
export const setupAxios = () => {
  const { actions } = authStore.getState();

  const userStorage = localStorage.getItem(LocalStorageKeys.user);
  const tokenStorage = localStorage.getItem(LocalStorageKeys?.accessToken);

  if (userStorage && tokenStorage) {
    const token = JSON.parse(tokenStorage);
    const userData = JSON.parse(userStorage);

    if (token) {
      const USER_DATA = { ...userData, authToken: token };
      actions.authSuccess({ data: USER_DATA });
    } else {
      actions.authFail();
    }
  }

  //   // Set Axios Interceptor
  setAxiosInterceptor();
};

export const appLoader = (status: boolean) => {
  const { actions } = authStore.getState();
  actions.loaderChange(status);
};

// To get image full path
export const getImageFullPath = (moduleName: string, fileName: string) => {
  return `${IMAGE_BASE_URL}${moduleName}/${fileName}`;
};
