import { Locale } from '@/types/baseTypes';
import Questions from '../Questions';
import Links from '../UI/links/Links';
import Title from './Title';

const questions = [
  {
    id: 25,
    question: 'What are the working hours?',
    answer:
      'Our working hours are Monday to Friday, 9:00 AM to 5:00 PM. Hours may vary by location, so please check with your branch or contact us.',
  },
  {
    id: 26,
    question: 'How to make an appointment?',
    answer:
      'Our working hours are Monday to Friday, 9:00 AM to 5:00 PM. Hours may vary by location, so please check with your branch or contact us.',
  },
  {
    id: 27,
    question: 'How to make an appointment?',
    answer:
      'Our working hours are Monday to Friday, 9:00 AM to 5:00 PM. Hours may vary by location, so please check with your branch or contact us.',
  },
  {
    id: 28,
    question: 'Is there a guarantee?',
    answer:
      'Our working hours are Monday to Friday, 9:00 AM to 5:00 PM. Hours may vary by location, so please check with your branch or contact us.',
  },
  {
    id: 29,
    question: 'Can an appointment be canceled?',
    answer:
      'Our working hours are Monday to Friday, 9:00 AM to 5:00 PM. Hours may vary by location, so please check with your branch or contact us.',
  },
];

const FAQ = ({ locale }: { locale: Locale }) => {
  return (
    <section className="mb-[60px] min-h-[496px] w-full xl:mb-20" id="faq">
      <div className="wrapper flex min-h-full flex-col justify-center gap-x-5 md:flex-row xl:gap-x-[114px]">
        <div className="flex flex-col items-start justify-between">
          <div className="mb-[30px] flex max-w-[303px] flex-col pl-[15px] md:pl-0">
            <Title tag="h2" textColor="primary" styles="mb-2.5 uppercase">
              FAQ
            </Title>
            <p>Find quick answers about our services, processes and policies</p>
          </div>
          <div className="hidden flex-col xl:flex">
            <p className="mb-2.5 text-lg font-bold">Still have questions?</p>
            <p className="mb-[21px] text-lg">Leave a request and get a free consultation</p>
            <Links category="primary" href="#faq" locale={locale} styles="w-[232px]">
              Leave a Request
            </Links>
          </div>
        </div>

        <Questions questions={questions} />
        <div className="mx-auto flex flex-col xl:hidden">
          <p className="mx-auto mb-2.5 w-[193px] text-center text-base font-bold xl:text-lg">
            Still have questions?
          </p>
          <p className="mx-auto mb-[21px] w-[193px] text-center xl:text-lg">
            Leave a request and get a free consultation
          </p>
          <Links category="primary" href="#faq" locale={locale} styles="w-[232px] mx-auto">
            Leave a Request
          </Links>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
