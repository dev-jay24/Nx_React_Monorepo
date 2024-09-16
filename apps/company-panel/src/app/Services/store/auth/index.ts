import { create } from 'zustand';
import { IUserData } from '../../auth/types';
import apiInstance from '../../../utils/constants/interceptor';
import { LocalStorageKeys } from '../../../utils/constants';

// import { LocalStorageKeys } from 'utils/constants';

// import { IUserData } from 'services/auth/types';
// import apiInstance from 'services/interceptor';

export type IAuthStore = {
  isLoading: boolean;
  isLoggedIn: boolean;
  completeProfile: boolean;
  driverProfile: boolean;
  editdriverProfile: boolean;
  userData: IUserData;
  isSuperAdmin?: boolean;
};

interface IAuthAction {
  actions: {
    loaderChange: (status: IAuthStore['isLoading']) => void;
    authSuccess: (payload: { data: IUserData }) => void;
    authFail: () => void;
    changeCompleteProfile: (status: boolean) => void;
    DriverCompleteProfile: (status: boolean) => void;
    DriverEditProfile: (status: boolean) => void;
  };
}

export const authStore = create<IAuthStore & IAuthAction>((set) => ({
  // initial state
  isLoading: false,
  isLoggedIn: false,
  completeProfile: false,
  driverProfile: false,
  editdriverProfile: false,
  userData: {} as IUserData,

  // Actions
  actions: {
    loaderChange: (status) => set((state) => ({ ...state, isLoading: status })),
    authSuccess: (payload) =>
      set((state) => {
        apiInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${payload.data.accessToken}`;
        localStorage.setItem(
          LocalStorageKeys.accessToken,
          JSON.stringify(payload.data.accessToken)
        );
        localStorage.setItem(
          LocalStorageKeys.user,
          JSON.stringify(payload.data)
        );
        return {
          ...state,
          userData: payload.data,
          isLoggedIn: true,
          completeProfile: payload.data.completeProfile,
        };
      }),
    authFail: () =>
      set((state) => {
        delete apiInstance.defaults.headers.common['Authorization'];
        localStorage.removeItem(LocalStorageKeys.accessToken);
        localStorage.removeItem(LocalStorageKeys.user);
        return {
          ...state,
          userData: {} as IUserData,
          isLoggedIn: false,
        };
      }),
    changeCompleteProfile: (status: boolean) => {
      const getUserData: IUserData = JSON.parse(
        localStorage.getItem(LocalStorageKeys.user) ?? '{}'
      ) as IUserData;
      set((state) => {
        return {
          ...state,
          completeProfile: status,
        };
      });
      localStorage.setItem(
        LocalStorageKeys.user,
        JSON.stringify({ ...getUserData, completeProfile: status })
      );
    },
    DriverCompleteProfile: (status: boolean) => {
      const getUserData: IUserData = JSON.parse(
        localStorage.getItem(LocalStorageKeys.user) ?? '{}'
      ) as IUserData;
      set((state) => {
        return {
          ...state,
          driverProfile: status,
        };
      });
      localStorage.setItem(
        LocalStorageKeys.user,
        JSON.stringify({ ...getUserData, driverProfile: status })
      );
    },
    DriverEditProfile: (status: boolean) => {
      const getUserData: IUserData = JSON.parse(
        localStorage.getItem(LocalStorageKeys.user) ?? '{}'
      ) as IUserData;
      set((state) => {
        return {
          ...state,
          editdriverProfile: status,
        };
      });
      localStorage.setItem(
        LocalStorageKeys.user,
        JSON.stringify({ ...getUserData, editdriverProfile: status })
      );
    },
  },
}));
