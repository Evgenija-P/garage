import Hero from '@/components/sections/Hero';
import VerticalSwiper from '@/components/VerticalSwiper';
import { Locale } from '@/types/baseTypes';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen w-full overflow-hidden">
      <Hero locale={locale} />
      {/* <VerticalSwiper /> */}
    </main>
  );
}
