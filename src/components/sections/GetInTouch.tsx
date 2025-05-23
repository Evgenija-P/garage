import Image from 'next/image';
import Title from './Title';

const GetInTouch = () => {
  return (
    <section className="relative h-fit w-full xl:min-h-[926px]">
      <div className="wrapper flex flex-col md:flex-row">
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
            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full">
              <Image
                src="/images/personal/Max_Fisher.png"
                alt="personal"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-[0] h-[602px] w-full bg-secondary-lite" />
    </section>
  );
};

export default GetInTouch;
