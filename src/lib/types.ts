import { links } from "./data";

export type activeSectionType = (typeof links)[number]["name"];

export type validateStringArgType = {
  value: unknown;
  maxLength: number;
};

export type Theme = "light" | "dark";
