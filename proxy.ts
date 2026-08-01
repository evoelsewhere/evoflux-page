import { NextRequest, NextResponse } from "next/server";

const LOCALE_COOKIE = "evoflux_locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type SupportedLocale = "en" | "ja";

function preferredLocale(acceptLanguage: string | null): SupportedLocale {
  if (!acceptLanguage) return "en";

  const candidates = acceptLanguage
    .split(",")
    .map((entry, index) => {
      const [rawTag, ...parameters] = entry.trim().toLowerCase().split(";");
      const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="));
      const quality = qualityParameter ? Number.parseFloat(qualityParameter.trim().slice(2)) : 1;
      return { tag: rawTag, quality: Number.isFinite(quality) ? quality : 0, index };
    })
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const candidate of candidates) {
    if (candidate.tag === "ja" || candidate.tag.startsWith("ja-")) return "ja";
    if (candidate.tag === "en" || candidate.tag.startsWith("en-")) return "en";
  }

  return "en";
}

function setLocaleCookie(response: NextResponse, locale: SupportedLocale) {
  response.cookies.set(LOCALE_COOKIE, locale, {
    httpOnly: true,
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
    secure: false,
    path: "/",
  });
  return response;
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const explicitLocale = url.searchParams.get("lang");

  if (explicitLocale === "en" || explicitLocale === "ja") {
    const isAim = url.pathname === "/aim" || url.pathname === "/jp/aim";
    url.pathname = explicitLocale === "ja"
      ? (isAim ? "/jp/aim" : "/jp")
      : (isAim ? "/aim" : "/");
    url.searchParams.delete("lang");
    return setLocaleCookie(NextResponse.redirect(url), explicitLocale);
  }

  if (url.pathname === "/" || url.pathname === "/aim") {
    const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value;
    const locale = savedLocale === "en" || savedLocale === "ja"
      ? savedLocale
      : preferredLocale(request.headers.get("accept-language"));

    if (locale === "ja") {
      url.pathname = url.pathname === "/aim" ? "/jp/aim" : "/jp";
      return setLocaleCookie(NextResponse.redirect(url), "ja");
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/jp", "/aim", "/jp/aim"],
};
