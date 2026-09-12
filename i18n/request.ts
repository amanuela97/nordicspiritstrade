import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const SUPPORTED_LOCALES = ["en", "fi", "ne"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

function isSupportedLocale(locale: string): locale is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const raw = cookieStore.get("NEXT_LOCALE")?.value ?? "en";
  const locale: Locale = isSupportedLocale(raw) ? raw : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default as Record<string, unknown>,
  };
});
