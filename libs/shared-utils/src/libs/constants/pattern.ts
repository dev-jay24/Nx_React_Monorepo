export const Regex = {
  PASSWORD_REG:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~])[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?~]{8,}$/,
  STRING_ONLY: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
  ATLEAST_2CHAT_LONG: /^(.*[a-zA-Z].*){2,}$/,
  NUMERIC: /^[0-9]*\.?[0-9]+$/,
  EMAIL: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
  DECIMAL: /^\d+(\.\d{1,2})?$/
};
