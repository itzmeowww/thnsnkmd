import * as rootParams from 'next/root-params';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // `locale` is set when an explicit value is passed (e.g. `getTranslations({locale})`);
  // otherwise read the `[locale]` segment via root params.
  const requested = locale ?? (await rootParams.locale());
  const resolved = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale: resolved,
    messages: (await import(`./messages/${resolved}.json`)).default
  };
});
