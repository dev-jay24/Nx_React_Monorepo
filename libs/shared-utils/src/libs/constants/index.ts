// // Env variables
// export const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;
// export const APP_NAME = import.meta.env.VITE_REACT_APP_NAME;
// export const IMAGE_BASE_URL = import.meta.env.VITE_REACT_APP_IMAGE_BASE;
// export const SOCKET_BASE = import.meta.env.VITE_REACT_SOCKET_BASE;
// export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_REACT_GOOGLE_MAPS_API_KEY;

// // firebase
// export const FIREBASE_API_KEY: any = import.meta.env.VITE_FIREBASE_API_KEY;
// export const FIREBASE_AUTH_DOMAIN: any = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
// export const FIREBASE_PROJECT_ID: any = import.meta.env.VITE_FIREBASE_PROJECT_ID;
// export const FIREBASE_STORAGE_BUCKET: any = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
// export const FIREBASE_MESSAGING_SENDER_ID: any = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
// export const FIREBASE_APP_ID: any = import.meta.env.VITE_FIREBASE_APP_ID;
// export const FIREBASE_MEASUREMENT_ID: any = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;
// export const FIREBASE_VAPID_KEY: any = import.meta.env.VITE_FIREBASE_VIP_KEY;

// Table Limit
export const tableLimit = 10;

// Local Storage Variables
// export const LocalStorageKeys = {
//   user: `user${APP_NAME}`,
//   accessToken: `accessToken${APP_NAME}`,
//   deviceId: `deviceId${APP_NAME}`,
//   fcmToken: `fcmToken${APP_NAME}`,
// };

// User Roles Constants
export const UserRole = {
  ADMIN: 'Admin',
  HO: 'HO',
  TC: 'TC',
};

// Country code
export const COUNTRY_CODE = '+1';

//  vehicle options
export const vehicleOptions = [
  { label: 'Box Stall', value: 'box_stall' },
  { label: 'Bumper Pull', value: 'bumper_pull' },
  { label: 'Gooseneck', value: 'gooseneck' },
  { label: 'Head To Head', value: 'head_to_head' },
  { label: 'Semi tractor', value: 'semi_tractor' },
  { label: 'Straight Load', value: 'straight_load' },
  { label: 'Slant Load', value: 'slant_load' },
];

//  trailer options
export const trailerOptions = [
  { label: 'No Preference', value: 'no_preference' },
  { label: 'Box Stall', value: 'box_stall' },
  { label: 'Bumper Pull', value: 'bumper_pull' },
  { label: 'Gooseneck', value: 'gooseneck' },
  { label: 'Head To Head', value: 'head_to_head' },
  { label: 'Semi tractor', value: 'semi_tractor' },
  { label: 'Straight Load', value: 'straight_load' },
  { label: 'Slant Load', value: 'slant_load' },
];

// Buckets
export enum Bucket {
  HORSE = 'horse',
  HORSE_OWNER = 'horseOwner',
  TRANSPORT_COMPANY = 'transportCompany',
  ADMIN = 'admin',
  TRIP = 'trip',
  LOGO = 'logo',
}

export enum TripStatus {
  UPCOMING = 'upcoming',
  CANCEL = 'cancel',
  CONFIRM = 'confirm',
  PICKUP = 'pickup',
  IN_TRANSIT = 'inTransit',
  ARRIVED = 'arrived',
  DROP_OFF = 'dropOff',
  COMPLETED = 'completed',
  HALT = 'halt',
}

export enum QuoteStatus {
  ACCEPT = 'accepted',
  REJECT = 'reject',
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export enum Role {
  ADMIN = 'Admin',
  HO = 'HO',
  TC = 'TC',
  DRIVER = 'DRIVER',
}

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
}
