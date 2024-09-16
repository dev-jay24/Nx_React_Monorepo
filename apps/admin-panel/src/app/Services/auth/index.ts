import apiInstance from '../../utils/constants/interceptor';
import { IChangePassApi, IForgotPass, ISignInReq, IUserData } from './types';
import { IRestPassApi } from './types.d';
import { IApiSuccess } from '@msr-monorepo/shared-utils';
import { } from  '@msr-monorepo/shared-components'

// Api end points for auth module
const ApiEndPoints = {
  auth: {
    login: `/auth/login`,
    forgot: `/auth/forgotPassword`,
    reset: `/auth/resetPassword`,
    changePassword: `/auth/changePassword`,
    logout: `/auth/logout`,
  },
};

// API
export const authApi = {
  // SignIn
  signIn(data: ISignInReq): Promise<IApiSuccess<IUserData>> {
    return apiInstance.post(ApiEndPoints?.auth?.login, data);
  },
  forgotApi(data: IForgotPass): Promise<IApiSuccess<unknown>> {
    return apiInstance.post(ApiEndPoints.auth.forgot, data);
  },
  resetApi(data: IRestPassApi): Promise<IApiSuccess<unknown>> {
    return apiInstance.post(ApiEndPoints.auth.reset, data);
  },
  changePasswordApi(data: IChangePassApi): Promise<IApiSuccess<unknown>> {
    return apiInstance.post(ApiEndPoints.auth.changePassword, data);
  },
  logOut(): Promise<IApiSuccess<any>> {
    return apiInstance.post(ApiEndPoints?.auth?.logout);
  },
};
