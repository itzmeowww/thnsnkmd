// const nextConfig = {
//   i18n: {
//     locales: ["en", "th", "ja"],
//     defaultLocale: "en",
//   },
// };


import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);