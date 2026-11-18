import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const defaultLocale = "en";
const locales = ["en", "bn"];

export default function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const isLocaleMissingInPath = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}`) && !pathname.startsWith(`/${locale}/`),
  );
  if (isLocaleMissingInPath) {
    const userLocale = getLocale(req);
    req.nextUrl.pathname = `/${userLocale + pathname}`;
    return NextResponse.redirect(req.nextUrl);
  }
  return NextResponse.next();
}

const getLocale = (req: NextRequest): string => {
  const acceptedLanguage = req.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
};

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
