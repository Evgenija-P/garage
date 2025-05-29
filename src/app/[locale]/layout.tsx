import Header from '@/components/sections/Header';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '@/styles/globals.css';
import '@/styles/loader.css';
import Footer from '@/components/sections/Footer';
import { Locale } from '@/types/baseTypes';
import { jura } from './fonts';

export const metadata: Metadata = {
  title: 'Garage | Sale and service of cars',
  description: 'Sale and service of cars',
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning className={jura.variable}>
      <body className={`${jura.className} relative antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
