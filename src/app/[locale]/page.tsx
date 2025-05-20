import Hero from "@/components/sections/Hero";
import { Locale } from "@/types/baseTypes";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main className="w-full min-h-screen overflow-hidden">
      <Hero locale={locale} />
    </main>
  );
}
