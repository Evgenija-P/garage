import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { routing } from "@/i18n/routing";

import Header from "@/components/sections/Header";
import "@/styles/globals.css";
import { jura } from "./fonts";

export const metadata: Metadata = {
  title: "Garage | Sale and service of cars",
  description: "Sale and service of cars",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = params;

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
