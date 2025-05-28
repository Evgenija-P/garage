import Image from 'next/image';
import ContactForm from '../ContactForm';
import Title from './Title';

const GetInTouch = () => {
  return (
    <section className="relative h-fit w-full xl:min-h-[926px]">
      <div className="wrapper flex flex-col justify-between md:flex-row">
        <div className="flex flex-col">
          <Title tag="h2" textColor="primary" styles="mb-2.5 uppercase">
            GET IN TOUCH
          </Title>
          <p className="mb-[53px] w-full md:w-[472px]">
            Our customer service team is available via email Tuesday-Saturday, 9:30 - 17:30
            excluding holidays. Send us an email at{' '}
            <a href="mailto:info.automaxgarage@gmail.com" className="font-bold hover:underline">
              info.automaxgarage@gmail.com
            </a>
              or leave a request via contact form .{' '}
          </p>
          <div className="relative z-[1] flex h-[160px] w-[472px] gap-x-5 rounded-full bg-surface p-5">
            <div className="relative h-[120px] w-[120px] flex-shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/personal/Max_Fisher.png"
                alt="personal"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col text-white">
              <h3 className="text-lg font-bold">Max Fisher</h3>

              <p className="mb-2.5 text-base font-medium opacity-50">Consultant</p>

              <p className="text-lg">Let’s plan a consultation and find the best option for you</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="absolute bottom-0 left-0 z-[0] h-[602px] w-full bg-secondary-lite" />
    </section>
  );
};

export default GetInTouch;
