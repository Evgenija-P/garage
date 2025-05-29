import Image from 'next/image';
import ContactForm from '../ContactForm';
import Title from './Title';

const GetInTouch = () => {
  return (
    <section className="relative h-fit w-full pb-[262px] md:pb-[100px] xl:min-h-[926px]">
      <div className="wrapper flex flex-col justify-between gap-y-[30px] md:flex-row">
        <div className="flex flex-col">
          <Title tag="h2" textColor="primary" styles="mb-2.5 uppercase text-center  md:text-left">
            GET IN TOUCH
          </Title>
          <p className="mb-5 w-full text-center md:mb-[53px] md:w-[472px] md:text-left">
            Our customer service team is available via email Tuesday-Saturday, 9:30 - 17:30
            excluding holidays. Send us an email at{' '}
            <a href="mailto:info.automaxgarage@gmail.com" className="font-bold hover:underline">
              info.automaxgarage@gmail.com
            </a>
              or leave a request via contact form .{' '}
          </p>
          <div className="relative z-[1] flex h-[120px] w-full gap-x-5 rounded-full bg-surface p-5 md:h-[160px] md:w-[472px]">
            <div className="relative h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-full md:h-[120px] md:w-[120px]">
              <Image
                src="/images/personal/Max_Fisher.png"
                alt="personal"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col text-white">
              <h3 className="text-base font-bold md:text-lg">Max Fisher</h3>

              <p className="mb-2.5 text-xs font-medium opacity-50 md:text-base">Consultant</p>

              <p className="text-sm md:text-lg">
                Let’s plan a consultation and find the best option for you
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="absolute bottom-0 left-0 z-[0] h-[1130px] w-full bg-secondary-lite md:h-[645px]" />
    </section>
  );
};

export default GetInTouch;
