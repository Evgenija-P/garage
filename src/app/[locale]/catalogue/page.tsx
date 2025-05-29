import PagePath from '@/components/PagePath';
import PageTitle from '@/components/PageTitle';
import { Locale } from '@/types/baseTypes';

export default async function CarCataloguePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <section className="w-full">
        <div className="wrapper mx-auto">
          <PagePath path="Catalogue" />
          <PageTitle>CAR Catalogue</PageTitle>
        </div>
      </section>
    </main>
  );
}
