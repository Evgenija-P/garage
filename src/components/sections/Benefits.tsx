import { Locale } from '@/types/baseTypes';
import BenefitsDetails from '../BenefitsDetails';

const Benefits = ({ locale }: { locale: Locale }) => {
  return (
    <section className="bg-left-center relative h-[686px] w-full bg-[url('/images/bg-benefits-mob.png')] bg-size-[56px_686px] bg-no-repeat pt-[30px] xl:h-[500px] xl:bg-[url('/images/bg-benefits.png')] xl:bg-size-[auto_126px] xl:bg-center xl:pt-0">
      <div className="wrapper h-full">
        <BenefitsDetails />
      </div>
    </section>
  );
};

export default Benefits;
