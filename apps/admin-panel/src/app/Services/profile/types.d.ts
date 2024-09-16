export interface IProfileObj {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IHorseOwner {
  _id: string;
  email: string;
  totalTrips: number;
  totalHorses: number;
  name: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
}

export interface IUserListReq {
  page: number;
  limit: number;
  search?: string;
  column?: string;
  order?: string;
}

export interface IHorseOwnerListRes {
  users: IUser[];
  totalRecords: number;
}
