import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

import { IProfileObj } from './types';
import apiInstance from '../../utils/constants/interceptor';
import { useApiMutation, useApiQuery } from '../masterHook';
import { IApiError } from '@msr-monorepo/shared-utils';

const ApiEndPoints = {
  view: `/profile/view`,
  edit: `/profile/edit`,
  stats: `/profile/stats`,
};

export const profileQueryKey = {
  all: ['profile'],
  detail: () => [...profileQueryKey.all, 'detail'],
  edit: () => [...profileQueryKey.all, 'edit'],
  stats: () => [...profileQueryKey.all, 'dashboardStats'],
};

// API
export const profileAPI = {
  getProfileDetail(): Promise<IProfileObj> {
    return apiInstance
      .post(ApiEndPoints.view)
      .then((response) => response.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  },
  editProfileDetail(data: IProfileObj): Promise<any> {
    return (
      apiInstance
        .post(ApiEndPoints.edit, data)
        // .then((response) => response.data)
        .catch((error) => {
          throw error?.response?.data;
        })
    );
  },
  getDashBoardDetail(): Promise<any> {
    return apiInstance
      .post(ApiEndPoints.stats)
      .then((response) => response.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  },
};

// Hooks
export const profileHooks = {
  GetProfileDetail: (queryOptions?: UseQueryOptions<any>) => {
    return useApiQuery(
      profileQueryKey.detail(),
      () => profileAPI.getProfileDetail(),
      {
        ...queryOptions,
      }
    );
  },
  EditProfileDetail: (
    mutationOptions?: UseMutationOptions<any, IApiError, IProfileObj>
  ) => {
    return useApiMutation({
      mutationKey: profileQueryKey.edit(),
      mutationFn: async (data: IProfileObj) =>
        profileAPI.editProfileDetail(data),
      mutationOptions,
    });
  },
  GetDashBoardDetail: (queryOptions?: UseQueryOptions<any>) => {
    return useApiQuery(
      profileQueryKey.stats(),
      () => profileAPI.getDashBoardDetail(),
      {
        ...queryOptions,
      }
    );
  },
};
