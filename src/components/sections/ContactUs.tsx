import Title from './Title';

const ContactUs = () => {
  return (
    <section
      className="relative min-h-[400px] w-full bg-secondary-lite bg-[url('/images/contact-us-mob.png')] bg-size-[100%_auto] bg-center bg-no-repeat md:pt-0 xl:h-[786px] xl:bg-[url('/images/contact-us.png')] xl:bg-size-[100%]"
      id="contact"
    >
      <div className="absolute -top-[202px] right-[20px] flex h-[277px] w-[235px] flex-col rounded-base bg-surface px-[15px] py-[30px] md:top-[131px] md:right-1/4 md:min-h-[340px] md:w-[374px] md:px-[30px] md:py-10">
        <Title tag="h2" textColor="accent" styles="mb-5 uppercase ">
          CONTACT US
        </Title>
        <p className="mb-2.5 text-base leading-none font-bold text-white md:text-lg">Address</p>

        <p className="mb-5 text-sm leading-none text-white md:mb-[25px] md:text-base">
          Verre Weide 65, 4264 KM Veen, Netherlands
        </p>

        <p className="mb-2.5 text-base leading-none font-bold text-white md:text-lg">Contact</p>
        <div className="flex flex-col gap-y-[7px]">
          <a
            href="mailto:info.automaxgarage@gmail.com"
            className="text-sm leading-none text-white hover:underline hover:underline-offset-2 md:text-base"
          >
            info.automaxgarage@gmal.com
          </a>
          <a
            href="tel:0612345678"
            className="text-sm leading-none text-white hover:underline hover:underline-offset-2 md:text-base"
          >
            (0) 6 29 76 81 60
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
