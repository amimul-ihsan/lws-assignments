import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { defaultLocale, supportedLocales } from "@/global.config";

export default function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const isLocaleMissingInPath = supportedLocales.every(
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
  return match(languages, supportedLocales, defaultLocale);
};

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
