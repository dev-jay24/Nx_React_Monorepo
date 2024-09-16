export const VALIDATION_MSG = {
  required: (fieldName: string) => `Please enter ${fieldName}.`,
  valid: (fieldName: string) => `Please enter valid ${fieldName}.`,
  select: (fieldName: string) => `Please select ${fieldName}.`,
  decimal: () => `Please enter at most two decimal places.`,
  LengthMessage: (fieldName: string) => ` ${fieldName} should be at least 2 character long.`,
  invalidNameAndPassword: () => `Invalid username or password.`,
  invalidPassword: () =>
    `Must be 8 or more characters and contain at least 1 upper, lower, number & special character`
};

export const POPUP_MSG = {
  SearchNotFound: () => `Search not found`,
  add: (fieldName: string) => `${fieldName} added successfully`,
  edit: (fieldName: string) => `${fieldName} updated successfully`,
  delete: (fieldName: string) => `${fieldName} deleted successfully`,
  LengthMessage: (fieldName: string) => ` ${fieldName} should be at least 2 character long.`,
  wentWrong: () => 'Something went wrong'
};
