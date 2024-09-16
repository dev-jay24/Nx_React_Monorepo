// Can vary depending on your BE response
interface IApiSuccess<T> {
  data: T;
  message?: number;
}
interface IApiError {
  message?: string;
  status: number;
}

export interface ICommonPagination {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: string;
}

export interface ITagDetail {
  tagName: string;
  color: string;
}

export interface IPickUp {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}
