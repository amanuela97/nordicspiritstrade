"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const SUPPORTED = ["en", "fi", "ne"];

export async function setLocale(locale: string) {
  const safe = SUPPORTED.includes(locale) ? locale : "en";
  const store = await cookies();
  store.set("NEXT_LOCALE", safe, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });
  revalidatePath("/", "layout");
}
