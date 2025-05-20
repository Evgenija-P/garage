import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { routing } from "@/i18n/routing";

import Header from "@/components/sections/Header";
import "@/styles/globals.css";
import { Locales } from "@/types/baseTypes";
import { jura } from "./fonts";

export const metadata: Metadata = {
  title: "Garage | Sale and service of cars",
  description: "Sale and service of cars",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locales };
}>) {
  const { locale } = await Promise.resolve(params);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning className={jura.variable}>
      <body className={`${jura.className} antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <Header locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
