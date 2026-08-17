import createMiddleware from 'next-intl/middleware';
import { routing } from './routing';

export default createMiddleware(routing);

export const config = {
  // Match all paths except API routes, Next internals, and files with an
  // extension (e.g. /images/...jpeg). This lets non-prefixed paths like
  // /cards redirect to the locale-prefixed version (/en/cards).
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
