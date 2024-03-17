import { DARK, THEME_LOCAL_STORAGE_KEY } from "./constants";
import { Theme, validateStringArgType } from "./types";

export const validateString = ({ value, maxLength }: validateStringArgType) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  } else if (error && typeof error === "string") {
    return error;
  } else {
    return "Something went wrong";
  }
};

export const addDarkModeClass = () => {
  document.documentElement.classList.add(DARK);
};

export const removeDarkModeClass = () => {
  document.documentElement.classList.remove(DARK);
};

export const updateLocalStorageThemeKey = (value: Theme) => {
  window.localStorage.setItem(THEME_LOCAL_STORAGE_KEY, value);
};
