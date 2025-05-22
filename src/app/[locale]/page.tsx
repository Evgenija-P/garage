import Arrivals from '@/components/sections/Arrivals';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { Locale } from '@/types/baseTypes';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Hero locale={locale} />
      {/* <Arrivals locale={locale} /> */}
      <Services locale={locale} />
    </main>
  );
}
