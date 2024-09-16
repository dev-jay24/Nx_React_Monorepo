// import { setAxiosInterceptor } from 'services/interceptor';
// import { authStore } from 'services/store/auth';
// import { PickUp } from 'services/trip/types';

import { IPickUp, ITagDetail } from './Types';
import {
  // IMAGE_BASE_URL,
  // LocalStorageKeys,
  QuoteStatus,
  Role,
  TripStatus,
  trailerOptions,
} from './constants';

//To concate the path for the public folder
export const toAbsoluteUrl = (pathname: string) =>
  window.location.origin + pathname;

// Rehydrate store and set axios default headers
// export const setupAxios = () => {
//   // const { actions } = authStore.getState();

//   // const userStorage = localStorage.getItem(LocalStorageKeys.user);
//   // const tokenStorage = localStorage.getItem(LocalStorageKeys?.accessToken);

//   if (userStorage && tokenStorage) {
//     const token = JSON.parse(tokenStorage);
//     const userData = JSON.parse(userStorage);

//     if (token) {
//       const USER_DATA = { ...userData, authToken: token };
//       actions.authSuccess({ data: USER_DATA });
//     } else {
//       actions.authFail();
//     }
//   }

//   // Set Axios Interceptor
//   setAxiosInterceptor();
// };

// export const appLoader = (status: boolean) => {
//   const { actions } = authStore.getState();
//   actions.loaderChange(status);
// };

export const isSorterType = function (order: any) {
  if (order === 'descend') {
    return 'desc';
  }
  if (order === 'ascend') {
    return 'asc';
  } else {
    return '';
  }
};

export function debounce<T>(
  this: T,
  func: (...args: any[]) => void
): (...args: any[]) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (this: T, ...args: any[]): void {
    clearTimeout(timer as NodeJS.Timeout);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, 700);
  };
}

// convert trip status to tag name
export function statusToTagNameAndColorConverter(status: TripStatus): {
  tagName: string;
  color: string;
} {
  if ([TripStatus.UPCOMING, TripStatus.CONFIRM].includes(status)) {
    return { tagName: 'Upcoming', color: 'magenta' };
  } else if (
    [
      TripStatus.PICKUP,
      TripStatus.IN_TRANSIT,
      TripStatus.DROP_OFF,
      TripStatus.ARRIVED,
    ].includes(status)
  ) {
    return { tagName: 'Ongoing', color: 'blue' };
  } else if (status === TripStatus.CANCEL) {
    return { tagName: 'Cancelled', color: 'red' };
  } else if (status === TripStatus.COMPLETED) {
    return { tagName: 'Completed', color: 'green' };
  } else if (status === TripStatus.HALT) {
    return { tagName: 'Declined', color: 'gold' };
  } else {
    return { tagName: status, color: 'default' };
  }
}

export function quoteStatusConverter(status: string): ITagDetail {
  if (status === QuoteStatus.REJECT) {
    return { tagName: 'Declined', color: 'red' };
  } else if (status === QuoteStatus.COMPLETED) {
    return { tagName: 'Confirmed', color: 'green' };
  } else if (status === QuoteStatus.ACCEPT) {
    return { tagName: 'Accepted', color: 'blue' };
  } else if (status === QuoteStatus.PENDING) {
    return { tagName: 'Pending', color: 'gold' };
  } else {
    return { tagName: status, color: 'default' };
  }
}

export function formatDate(str: string) {
  const date = new Date(str);
  return `${('0' + (date.getMonth() + 1)).slice(-2)}-${(
    '0' + date.getDate()
  ).slice(-2)}-${date.getFullYear()}`;
}

export function getAdders(address: IPickUp) {
  return `${address.address}, ${address.city}, ${address.state}, ${address.country} ${address.pincode}`;
}

// Format phone number in the format (XXX) XXX-XXXX
export const formatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return '';

  // Remove the country code and any spaces
  const cleanedNumber = phoneNumber.replace('+1', '').replace(/\s+/g, '');

  // Extract area code and the remaining parts
  const areaCode = cleanedNumber.slice(0, 3);
  const centralOfficeCode = cleanedNumber.slice(3, 6);
  const lineNumber = cleanedNumber.slice(6);

  // Format the phone number
  const formattedNumber = `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;

  return formattedNumber;
};

export function roleConverter(status: string): string {
  if (status === Role.HO) {
    return 'Horse Owner';
  } else if (status === Role.TC) {
    return 'Transport Company';
  } else if (status === Role.DRIVER) {
    return 'Driver';
  } else {
    return status;
  }
}

// To convert string to title case
export const toTitleCase = (val: string) => {
  return val
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export function getLabelFromOptions(value: string) {
  const option = trailerOptions.find((option) => option.value === value);
  return option ? option.label : null;
}

export function formatStringToTitleCase(str: string): string {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Convert snake_case to space-separated words
  str = str.replace(/_/g, ' ');

  // Convert to title case
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// To format time
export const formatTime = (date: string) => {
  const dateObj = new Date(date);

  // Extract time components
  let hours = dateObj.getHours();
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');

  // Determine AM or PM
  const period = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour time to 12-hour time
  hours = hours % 12 || 12; // Convert 0 to 12

  // Format time with AM/PM
  const formattedTime = `${hours}:${minutes} ${period}`;

  return formattedTime;
};

// format float value with 2 decimal places
export const formatFloatValue = (value: number) => {
  if (typeof value === 'number') {
    const decimalPart = String(value).split('.')[1];
    if (decimalPart && decimalPart.length < 2) {
      return value.toFixed(2);
    }
  }
  return value;
};

// To get image full path
// export const getImageFullPath = (moduleName: string, fileName: string) => {
//   return `${IMAGE_BASE_URL}${moduleName}/${fileName}`;
// };
