import { ru } from './ru';
import { uz } from './uz';
import { en } from './en';

export const translations = {
  ru,
  uz,
  en
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof ru;