// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  console.log('Received locale in request.ts:', locale);
  if (!locale) {
    console.error('Locale is undefined. Available locales: en, ru, es');
    locale = 'en'; // Временный fallback
    // throw new Error('Locale is undefined. Please ensure the URL includes a valid locale (e.g., /en, /ru, /es).');
  }

  try {
    const messages = (await import(`../locales/${locale}.json`)).default;
    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error('Failed to load messages for locale', locale, error);
    throw error;
  }
});