export interface ISignInReq {
  email: string;
  password: string;
  deviceId: string;
  fcmToken: string | null;
  rememberMe: boolean;
}

export interface IUserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  image: string;
  accessToken: string;
}

export interface IForgotPass {
  email: string;
  role: string;
}
export interface IRestPass {
  password: string;
  confirm_password: string;
}

export interface IRestPassApi {
  resetPasswordToken: string | null;
  newPassword: string;
}

export interface IChangePassApi {
  resetPasswordToken: string | null;
  newPassword: string;
}
