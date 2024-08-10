import createMiddleware from 'next-intl/middleware';
import { locales } from './config';
 
export default createMiddleware({
  locales: locales,
  defaultLocale: 'en'
});
 
console.log(locales.join('|'))
export const config = {
  matcher: ['/', "/(en|th|ja)/:path*"]
};