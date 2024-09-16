export const ROUTES = {
  default: `/`,
  pageNotFound: `/404`,
  signIn: `/signIn`,
  signUp: `/signUp`,
  changePassword: `/change-password`,
  forgotPassword: `/forgot-password`,
  myAccount: `/myAccount`,
  dashboard: `/dashboard`,
  userManagement: `/user-management`,
  userView: `/user-management/view-user`,
  userEdit: `/user-management/edit-user`,
  privacyPolicy: `/privacy-policy`,
  termsAndConditions: `/terms-and-conditions`,
  FAQs: `/FAQs`,
  reactQueryDemo: `/react-query-demo`,
  HorseOwner: `/horse-owner`,
  AddHorseOwner: `/horse-owner/add`,
  EditHorseOwner: (id: string) => `/horse-owner/edit/${id}`,
  ViewHorseOwner: (id: string) => `/horse-owner/view/${id}`,
  resetPassword: `/reset-password`,
  profile: `/profile`,
  addProfile: `/add-profile`,

  //Trip Management
  tripManagement: `/trip-management`,
  viewTripDetail: (id: string) => `/trip-management/view/${id}`,
  tripMapPage: (id: string) => `/trip-management/view-trip/${id}`,

  //Quote Management
  quoteManagement: `/quote-management`,
  viewQuotesDetail: (id: string) => `/quote-management/view/${id}`,
  viewPendingQuotesDetail: (id: string, quoteId: string) =>
    `/quote-management/view/${id}/${quoteId}`,

  //Transport Comapany Management
  transportComanyManagement: `/transport-company-management`,
  addTransportComanyManagement: `/transport-company-management/add`,
  editTransportComanyManagement: (id: string) =>
    `/transport-company-management/edit/${id}`,
  viewTransportComanyManagement: (id: string) =>
    `/transport-company-management/${id}`,
  viewDriver: (id: string) =>
    `/transport-company-management/driver-management/${id}`,
  viewDriverDetail: (id: string) =>
    `/transport-company-management/driver-management/view/${id}`,

  //Commission management

  commissionManagement: `/commission-management`,

  // Payment Management
  paymentManagement: `/payment-management`,
  viewPaymentDetail: (id: string) => `/payment-management/view/${id}`,

  // Notification
  notification: `/notification`,

  pandingViewQuoteDetail: (id: string) =>
    `/quote-management/panding-quote-view/${id}`,
};
